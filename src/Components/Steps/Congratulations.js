import React, { useContext } from 'react'
import { StepperContext } from '../../Context/StepperContext'

export default function Congratulations() {
  const { userData } = useContext(StepperContext)

 console.log(userData)

  return (
    <section className='flex flex-col'>
      <div className='flex justify-center'>
        <img src='tick.png' alt='tick' />
      </div>
      <div className='font-bold text-3xl text-center mt-10'>
        Congratulations, Eren!
      </div>
      <span className='mt-3 text-base text-center text-gray-500'>
        You have completed onboarding, you can start using the Eden!
      </span>
    </section>
  )
}
