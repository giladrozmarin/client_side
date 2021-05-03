import { useEffect,useState } from 'react'
import {getAllUsers } from '../utils/users'

const useListUsers = () => {
 const [loading, setLoading] = useState(true)
 const [failed,setFiled] = useState(false)
 const [data , setData] = useState('')
  

 useEffect(()=> {
    (async () => {
    try{
   setLoading(false)
   const {data}= await getAllUsers()
   setData(data)
    }
   catch{
     setLoading(true)
     setFiled(true) 
   }})()
  },[])
  
 
  return[loading,failed,data]

}

export default useListUsers

// useEffect(() =>getAllUsers().then((res) => setAllUsers(res.data)), []);