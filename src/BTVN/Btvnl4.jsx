import React, { useState } from 'react'
import Fun from '../zustand/store/Fun'

const Btvnl4 = ()=> {
    const [name, setName] = useState("")
    const [age, setAge] = useState(16)
    const [gender, setGender] = useState("")
    const [major, setMajor] = useState("")
    const [mail, setMail] = useState("")
    const [pass, setPass] = useState("")
    
    const resetForm = () => {
        setName('')
        setAge(0)
        setGender('')
        setMajor('')
        setMail('')
        setPass('')
    }

    const postUser = Fun(state => state.postUser)

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            name,
            age,
            gender,
            major,
            mail,
            pass,
        }
        postUser(data)
        resetForm()
    }

    return (
        <form onSubmit={handleSubmit} className='w-full h-screen flex justify-center items-center'>
          <div className='w-[600px] p-5 bg-[#F1EEE9] flex justify-center items-center flex-col'>
            <p>Name :</p>
            <input required type='text' className='text-[15px] p-1' placeholder='' value={name} onChange={e => setName(e.target.value)} />
            <p>Age :</p>
            <input required type='number' className='text-[15px] p-1' placeholder='' value={age} onChange={e => setAge(e.target.value)} />
            <p>Gender :</p>
            <input required type='text' className='text-[15px] p-1' placeholder='' value={gender} onChange={e => setGender(e.target.value)} />
            <p>Major :</p>
            <input required type='text' className='text-[15px] p-1' placeholder='' value={major} onChange={e => setMajor(e.target.value)} />
            <p>Mail :</p>
            <input required type='email' className='text-[15px] p-1' placeholder='' value={mail} onChange={e => setMail(e.target.value)} />
            <p>Password :</p>
            <input required type='password' className='text-[20px] p-1' placeholder='' value={pass} onChange={e => setPass(e.target.value)} />
            <button className='mt-4 w-[80%] p-2 rounded-[20px] bg-[#EC994B] text-[#F1EEE9] transition-all hover:scale-125' type='submit'>Submit</button>
            </div>
        </form>
    )
}

export default Btvnl4