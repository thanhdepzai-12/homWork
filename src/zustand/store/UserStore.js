import create  from "zustand";


export const useUserstore = create((set)=>({
    defaultString : "haha",
 
    globalCount: 0,

    increaseGlobalCount : () => set(State => ({globalCount : State.globalCount + 1})),
    decreaseGlobalCount : () => set(State => ({globalCount : State.globalCount + 1})),
    resetGlobalCount : () => set(State => ({globalCount : 0})),
userInfo : {
 name :'',
 fullname : '',
 age : '',
 gender : '',
 major : '',
 mail : '',
 password : ''

},
setUserInfo: ()=> set(State => ({userInfo : State.userInfo.name }))

}))