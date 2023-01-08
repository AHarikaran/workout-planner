
import React, { useEffect, useState } from 'react';
import ModalSteps from './ModalSteps'
import { Formik, Form,Field } from 'formik'
import { exerciseOptions, fetchData } from '../fetchData'
import { isConstructorDeclaration } from 'typescript';

const StepOne = () => {
    const [bodyParts, setBodyParts] = useState([]);
    const [checked, setChecked] = useState([]);
    useEffect(() => {
      const fetchExercisesData = async () => {
        const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
        setBodyParts([...bodyPartsData]);
      };
  
      fetchExercisesData();
    }, []);

    const handleCheck = (event) => {
      var updatedList = [...checked];
      if (event.target.checked) {
        updatedList = [...checked, event.target.value];
      } else {
        updatedList.splice(checked.indexOf(event.target.value), 1);
      }
      setChecked(updatedList);
    };
  
    // Generate string of checked items
    const checkedItems = checked.length
      ? checked.reduce((total, bodyParts) => {
          return total + ", " + bodyParts;
        })
      : "";
  
    // Return classes based on whether bodyParts is checked
    var isChecked = (bodyParts) =>
      checked.includes(bodyParts) ? "checked-bodyParts" : "not-checked-bodyParts";

      return (
      <div className="app">
        <div className="checkList">
          <div className="title">Choose which Body Parts You Would Like To Train</div>
          <div className="list-container">
            {bodyParts.map((bodyParts, i) => (
              <div key={i}>
                <input value={bodyParts} type="checkbox" onChange={handleCheck} />
                <span className={isChecked(bodyParts)}>{bodyParts}</span>
              </div>
            ))}
          </div>
        </div>
  
        <div>
          {`Items checked are: ${checkedItems}`}
        </div>
        <button type="submit" >Next</button>
      </div>
    );


}

export default StepOne
