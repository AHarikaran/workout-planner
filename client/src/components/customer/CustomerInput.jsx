import { Heading, Container, Box, VStack, Text} from '@chakra-ui/react';
import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Field, Form,Formik } from 'formik';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react'
import { useState } from "react";
import { useFormik } from "formik";
import TextField from '../Login/TextField';
import ModalSteps from './ModalSteps/ModalSteps';


const CustomerInput = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
  <div>
  <Box p={4} borderWidth="5px" borderColor="gray.500" rounded = "md">
  <Heading display="inline-block" mr={150}>Today's Workout</Heading>
  <Formik>
  <VStack
        as={Form}
        w={{ base: "90%", md: "500px" }}
        m="auto"
        justify="center"
        h="40vh"
        spacing="1rem"
      >
 <div>
      <Button onClick={onOpen}>New Workout Plan</Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset='slideInBottom'
      >
        <ModalOverlay />
        <ModalContent>
        <ModalSteps />
        </ModalContent>
      </Modal>
    </div>
      </VStack>
      </Formik>
    </Box>
  </div>
  )
}

export default CustomerInput;
