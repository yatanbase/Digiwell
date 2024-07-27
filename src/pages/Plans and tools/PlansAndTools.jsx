import React from 'react'
import { Outlet } from 'react-router-dom'

export default function PlansAndTools() {
  return (
    <div className='flex flex-col gap-4 w-full'>
      <div className="header flex text-3xl font-bold gap-8">
        <div className="plans">Digi Plans</div>
        <div className="tools">Tools</div>
      </div>
      <Outlet />
    </div>
  )
}
