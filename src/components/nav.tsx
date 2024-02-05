import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full flex justify-center mx-auto'>
      <nav className='max-w-screen-xl w-full p-4'>
        <ul className='flex flex-row gap-6'>
          <li>
            <a href='/test-1'>Test 1</a>
          </li>
          <li>
            <a href='/test-2'>Test 2</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
