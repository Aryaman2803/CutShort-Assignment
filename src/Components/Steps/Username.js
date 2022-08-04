import React, { useContext } from 'react'
import { StepperContext } from '../../Context/StepperContext'

export default function Username() {
  const { userData, setUserData } = useContext(StepperContext)

  const handleChange = (e) => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }

  return (
    <div className='flex flex-col'>
      <div className='font-bold text-3xl text-center'>
        Welcome! First thing first...
      </div>
      <span className='mt-3 text-base text-center text-gray-500'>
        You can always change them later.
      </span>

      <div className='w-full flex-1 inputWrapper '>
        <div className='font-semibold  mt-10 text-base text-sm text-gray-700 '>
          Full Name
        </div>
        <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
          <input
            onChange={handleChange}
            value={userData['fullname'] || ''}
            name='fullname'
            placeholder='Steve Jobs'
            className='p-2 px-2 appearance-none outline-none w-full text-gray-400 text-sm'
          />
        </div>
      </div>
      <div className='w-full flex-1 pt-1 inputWrapper'>
        <div className='font-semibold  mt-3 text-base text-sm text-gray-700 '>
          Display Name
        </div>
        <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
          <input
            onChange={handleChange}
            value={userData['displayname'] || ''}
            name='displayname'
            placeholder='Steve'
            className='p-2 px-2 appearance-none outline-none w-full text-gray-400 text-sm'
          />
        </div>
      </div>
    </div>
  )
}
