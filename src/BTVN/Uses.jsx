import React from 'react'

const Uses = ({user}) => {
  return (



    
<div className=' m-[5px] w-[1280px]  flex justify-between items-center'>
    <div className='wid212'>
        {user.name}
    </div>
    <div className='wid212'>
        {user.age}
    </div>
    <div className='wid212'>
        {user.gender}
    </div>
    <div className='wid212'>
        {user.major}
    </div>
    <div className='wid212'>
        {user.mail}
    </div>
    <div className='wid212'>
        {user.pass}
    </div>
    </div>

  )
}

export default Uses