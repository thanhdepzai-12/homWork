import React from 'react'
import Btvnl4 from './BTVN/Btvnl4'



import Random from './BTVN/Lesson5'
import TestGlobal from './BTVN/TestGlobal'
import { useUserstore } from './zustand/store/UserStore'
import User from './BTVN/User'
const App = () => {
const { 
  globalCount,
  increaseGlobalCount,
  decreaseGlobalCount,
  resetGlobalCount,
  userInfo
} =useUserstore(state => state)
  return  (
  //   <div className='w-full h-screen bg-[red] flex justify-center items-center'>
  // <table className='overflow-hidden   w-[1280px]  mx-auto h-[90%] bg-[blue] rounded-[10px]'>

  //   <tr  className='w-full text-[whitesmoke] h-[10%] flex bg-[#333] justify-between px-10'>
  //     <td className='w-[30%] flex  items-center'>NAME</td>

  //     <td className='w-[30%] flex  items-center'>DESIGNATION</td>
 
  //     <td className='w-[15%] flex  items-center'>STATUS</td>
  //     <td className='w-[15%] flex  items-center'>ROLE</td>
  //     <td className='w-[10%]'></td>
  //   </tr>

  //   <New />
  //   <New />
  //   <New />
  //   <New />
  //   <New />

  // </table>
  // </div>

  <div className='flex-col '>
   <User />
  
<Btvnl4 /> 
</div>
  )
}


 
export default App 


 