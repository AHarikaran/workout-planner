const express = require("express");
const { Server } = require("socket.io");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const authRouter = require("./routers/authRouter");
const session = require("express-session")
require("dotenv").config();
const RedisStore = require("connect-redis")(session)

const server = require("http").createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: "true",
  },
});

const redisClient = require("./redis");

app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(session({
    secret: process.env.COOKIE_SECRET,
    credentials:true, 
    name:"sid",
    store:new RedisStore({client: redisClient}),
    resave:false, 
    saveUninitialized:false,
    cookie: {
        secure: process.env.ENVIRONMENT === "production" ? "true" : "auto", 
        httpOnly:true, 
        expires: 1000*60*10,
        sameSite:process.env.ENVIRONMENT=== "production" ? "none" : "lax"
    }
}))

app.use("/auth", authRouter);

io.on("connect", socket => {});

server.listen(4000, () => {
  console.log("Server listening on port 4000");
});
