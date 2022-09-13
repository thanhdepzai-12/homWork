import React from 'react'
import Fun from "../zustand/store/Fun";
import Uses from './Uses';


const Users = ()=> {
  const users = Fun(state=>state.users)
  return (
    <div className='w-full flex-col flex justify-center  items-center bg-[#EC994B]'>
      
      <div className='w-[1280px] h-[100px] flex justify-between items-center border-b-[2px] py-[10px] border-[black]'>
<div className='wid212'>
       Tên
    </div>
    <div className='wid212'>
        Tuổi
    </div>
    <div className='wid212'>
        Giới Tính
    </div>
    <div className='wid212'>
       Nghề Nghiệp
    </div>
    <div className='wid212'>
       Hòm Thư Điện Tử
    </div>
    <div className='wid212'>
     Mật Khẩu
    </div>
    </div>  
      <div className='flex justify-center items-center py-[8px]'>
        {users.length > 0 ? users.map((user,id)=><div><Uses user={user}/></div>)
        : 'No user here yet'}
        </div>
    </div>
  )
}
export default Users