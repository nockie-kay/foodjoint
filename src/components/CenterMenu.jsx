import React from 'react'

function CenterMenu() {
    const liStyle = "mr-[3rem] hover:cursor-pointer text-[1rem]"
  return (
    <div className="menu flex">
        <ul className='flex w-[100%] justify-between'>
            <li className={liStyle} >Home</li>
            <li className={liStyle} >About</li>
            <li className={liStyle} >Contact</li>
        </ul>
    </div>
  )
}

export default CenterMenu