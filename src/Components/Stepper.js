import React, { useEffect, useState, useRef } from 'react'

function Stepper({ steps, currentStep }) {
  const [newStep, setNewStep] = useState([])
  const stepRef = useRef()

  const updateStep = (stepNumber, steps) => {
    //
    const newSteps = [...steps]
    let count = 0

    while (count < newSteps.length) {
      //Current step
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        }
        count++
      }
      //step completed
      else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        }
        count++
      }
      //step pending
      else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        }
        count++
      }
    }
    return newSteps
  }

  useEffect(() => {
    const stepState = steps.map((step, index) => {
      return Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    })
    stepRef.current = stepState
    const current = updateStep(currentStep - 1, stepRef.current)
    setNewStep(current)
  }, [steps, currentStep])

  const displaySteps = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={
          index !== newStep.length - 1
            ? 'w-full flex items-center'
            : 'flex items-center'
        }
      >
        <div className='relative flex flex-col items-center '>
          <div
            className={`rounded-full  transition duration-500 ease-in-out h-9 w-9 text-sm flex items-center justify-center py-3
            ${step.selected ? 'bg-[#664DE5] text-white' : 'border'}`}
          >
            {/* Display Number */}
            {step.completed ? (
              <span className='text-white'>{index + 1}</span>
            ) : (
              index + 1
            )}
          </div>
        </div>
        <div
          className={`flex-auto transition border-b duration-500 ease-in-out relative ${
            step.completed ? 'border-violet-700' : 'border-gray-300'
          }`}
        >
          {/* Display Line */}
        </div>
      </div>
    )
  })

  return (
    <div className=' stepperBox  mx-auto p-4 flex justify-between items-center'>
      {displaySteps}
    </div>
  )
}

export default Stepper
