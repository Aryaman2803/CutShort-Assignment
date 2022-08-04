import React, { useContext } from 'react'
import { StepperContext } from '../../Context/StepperContext'

const Workspace = () => {
  const { userData, setUserData } = useContext(StepperContext)

  const handleChange = (e) => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }

  return (
    <div className='flex flex-col'>
      <div className='font-bold text-3xl text-center'>
        Let's set up a home for all your work
      </div>
      <span className='mt-3 text-base text-center text-gray-500'>
        You can always create another workspace later.
      </span>

      <div className='w-full flex-1 inputWrapper '>
        <div className='font-semibold  mt-10 text-base text-sm text-gray-700 '>
          Workspace Name
        </div>
        <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
          <input
            onChange={handleChange}
            value={userData['workspacename'] || ''}
            name='workspacename'
            placeholder='Eden'
            className='p-2 px-2 appearance-none outline-none w-full text-gray-400 text-sm'
          />
        </div>
      </div>
      <div className='w-full flex-1 pt-1 inputWrapper'>
        <div className='font-semibold  mt-3 text-base text-sm text-gray-700 '>
          Workspace URL{' '}
          <span className='font-normal text-gray-300'> (optional)</span>
        </div>
        <div className='bg-white mt-2 my-2  flex border border-gray-200 rounded'>
          <input
            placeholder='www.eden.com/'
            disabled
            className='p-3 w-1/3 px-2 bg-gray-100 appearance-none outline-none  text-gray-400 text-sm'
          />
          <input
            onChange={handleChange}
            value={userData['workspaceurl'] || ''}
            name='workspaceurl'
            placeholder='Example'
            className='p-2 px-2 w-2/3 appearance-none outline-none  text-gray-400 text-sm'
          />
        </div>
      </div>
    </div>
  )
}

export default Workspace
