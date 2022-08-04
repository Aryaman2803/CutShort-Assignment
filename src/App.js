import { useState } from 'react'
import Stepper from './Components/Stepper'
import StepperControl from './Components/StepperControl'
import Username from './Components/Steps/Username'
import Workspace from './Components/Steps/Workspace'
import Plan from './Components/Steps/Plan'
import Congratulations from './Components/Steps/Congratulations'
import { StepperContext } from './Context/StepperContext'

function App() {
  const steps = ['Username', 'Workspace', 'Plan', 'Congratulations']
  const [currentStep, setCurrentStep] = useState(1)
  const [userData, setUserData] = useState('')
  const [finalData, setFinalData] = useState([])

  const displaySteps = (step) => {
    switch (step) {
      case 1:
        return <Username />
      case 2:
        return <Workspace />
      case 3:
        return <Plan />
      case 4:
        return <Congratulations />
      default:
    }
  }

  const handleClick = (direction) => {
    let newStep = currentStep
    if (direction === 'next') newStep++
    //check step edge case
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep)
  }

  return (
    <div className='box'>
      {/* Steppers */}
      <div className='container horizontal mt-5'>
        
      <div className='flex justify-center my-10'>
          <img
            src='./logo.png'
            style={{ width: '30px', height: '30px' }}
            alt='logo'
          />
          <span className='font-bold text-2xl text-center pl-2'>Eden</span>
        </div>

        <Stepper steps={steps} currentStep={currentStep} />

        {/* Display Components */}
        <div className='my-5 pt-8 pb-3 '>
          <StepperContext.Provider
            value={{
              userData,
              setUserData,
              finalData,
              setFinalData,
            }}
          >
            {displaySteps(currentStep)}
          </StepperContext.Provider>
        </div>
      </div>

      {/* Navigation */}
      <StepperControl
        handleClick={handleClick}
        currentStep={currentStep}
        steps={steps}
      />
    </div>
  )
}

export default App
