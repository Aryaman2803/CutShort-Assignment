import React, { useContext, useState } from 'react'
import { StepperContext } from '../../Context/StepperContext'

export default function Plan() {
  const { userData, setUserData } = useContext(StepperContext)
  const [data, setData] = useState('')

  const handleClick = (data) => {
    setUserData({ ...userData, plan: data })
  }

  return (
    <div className='flex flex-col'>
      <div className='font-bold text-3xl text-center'>
        How are you planning to use Eden?
      </div>
      <span className='mt-3 text-base text-center text-gray-500'>
        We'll streamline your setup experience accordingly.
      </span>

      <div className='flex justify-evenly  md:w-full mt-14'>
        <div
          className={`planningContainer  pl-3 pt-5 cursor-pointer ${
            data === 'myself' ? 'active' : ''
          }`}
          onClick={() => {
            handleClick('myself')
            setData('myself')
          }}
        >
          <img src='./myself.png' alt='myself' />
          <div className='font-bold py-2'>For myself</div>
          <div className='text-sm text-gray-500'>
            Write better. Think more clearly. Stay organised.
          </div>
        </div>
        <div
          className={`planningContainer  pl-3 pt-5 cursor-pointer ${
            data === 'team' ? 'active' : ''
          }`}
          onClick={() => {
            handleClick('team')
            setData('team')
          }}
        >
          <img src='./team.png' alt='myself' />
          <div className='font-bold py-2'>With my team</div>
          <div className='text-sm text-gray-500'>
            Wikis, docs, tasks & projects, all in one place.
          </div>
        </div>
      </div>
    </div>
  )
}
