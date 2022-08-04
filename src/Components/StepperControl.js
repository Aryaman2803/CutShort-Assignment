import React from 'react'

const StepperControl = ({ handleClick, currentStep, steps }) => {
  
  if(currentStep===steps.length){
  
  }
  return (
    <div className='flex'>
      {/* Forward Button */}
      <button
        className={`bg-[#664DE5] text-white w-full rounded-md inputWrapper py-3 text-sm px-4`}
        onClick={() => {
          handleClick('next')
          if(currentStep === steps.length)  window.alert('Check console for entered values.')
        }}
      >
        {currentStep === steps.length ? 'Launch Eden' : 'Create Workspace'}
      </button>
    </div>
  )
}

export default StepperControl
