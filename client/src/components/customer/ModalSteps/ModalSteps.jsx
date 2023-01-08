import {React, useState} from 'react'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import * as Yup from "yup"

const ModalSteps = () => {
    const [data, setData] = useState({
        bodyParts:""
    })

    const [currentStep, setCurrentStep] = useState(0)

    const makeRequest = (formData) => {
        console.log ("form submitted",formData)
    }

    const handleNextStep = (newData, final = false) => {
        setData(prev => ({...prev, ...newData}))

        if (final) {
            makeRequest(newData)
        }
        setCurrentStep(prev => prev + 1)
    }

    const handlePrevStep = (newData) => {
        setData(prev => ({...prev, ...newData}))
        setCurrentStep(prev => prev - 1)
    }

    const steps = [<StepOne next = {handleNextStep} data = {data} />, <StepTwo next = {handleNextStep}  prev = {handlePrevStep} data = {data} />]



  return (
    <div>
      {steps[currentStep]}
    </div>
  )
}

export default ModalSteps
