import {useRef, useState} from 'react'
import styled from "styled-components";
import useListUsers from '../hooks/useListUsers'
import {getUserById,createUser,updateUser,deleteUser} from '../utils/users'
import {clearForm} from '../utils/form'

 
//1
export const Users = () => {
    const[loading,failed,data] = useListUsers()
    const shapeUserList = ( ) => 
    data.map((item,i) => 
        {
          return (
            <>
          <h3 key={i}>user number {i+1}</h3>  
         <p>
         {`${item.first_name} ${item.last_name}`} </p> 
         <p> {`${item.email}`}</p>
            </>
          )
        })
    return( 
    <>
    <Title> user list </Title>
    {loading ? 'loading...' : data? shapeUserList(): failed}
    </>
)}
//2
export const CreateUser = () => {
//get name of ref and return callback to set ref element 
const setRef = (name)=> (el) => elRef.current[name] = el
    const elRef = useRef({});

    const handleSubmit = (e) => {
      e.preventDefault()
      let obj = {
        'first_name' : elRef.current['first_name'].value,
        'last_name' :  elRef.current['last_name'].value,
        'email' :    elRef.current['email'].value,
        'phone' : elRef.current['phone'].value
      }
      createUser(obj)
      clearForm(elRef)
    }

    //get allUser List in component Did mount - not in use in this version
    // *** useEffect(() =>getAllUsers().then((res) => setAllUsers(res.data)), []);
    
   
    return (
    <DivApp>
    <Form  onSubmit={handleSubmit}> 
   <Input ref={setRef('first_name')}  placeholder='enter your first name' />
   <Input ref={setRef('last_name')} placeholder='enter your last name'/>
   <Input ref={setRef('email')} placeholder='enter your email'/>
   <Input ref={setRef('phone')} placeholder='enter your phone number'/>
   <Input type='button' value='send' onClick={handleSubmit} />
   </Form>
   </DivApp>)
}
//3
export const GetUserById = () => {
    const[userData,setUserData] = useState('')
    //get name of ref and return callback to set ref element 
    const setRef = (name)=> (el) => elRef.current[name] = el
    const elRef = useRef({});

    const handleSubmit = async () => {
       let {data} = await getUserById(elRef.current['id'].value)
        setUserData(data)
      }

    const shapeUserById = () => 
         <>
         <p>
         {`${userData.first_name} ${userData.last_name}`} </p> 
         <p> {`${userData.email}`}</p>
         </>
          
        
    return (
    <>
    <Input ref={setRef('id')}  placeholder='Enter your id for search' />
    <Input type='button' value='send' onClick={handleSubmit} />
    {userData ? shapeUserById() : null }
    </>

    )
 }
//4
export const UpdateUser  = () => {
    //get name of ref and return callback to set ref element 
const setRef = (name)=> (el) => elRef.current[name] = el
const elRef = useRef({});
const[user,setUser] = useState('')   
const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };
const handleSubmit = (e) => {
  e.preventDefault()
  const id =  user._id
 delete user._id;
  updateUser(id,user)
 
}


//get allUser List in component Did mount - not in use in this version
// *** useEffect(() =>getAllUsers().then((res) => setAllUsers(res.data)), []);


return (
<DivApp>
<Form  onSubmit={handleSubmit}> 
<Input name='_id'  ref={setRef('id')}  placeholder='enter your id' onChange={handleChange} />
<Input name='first_name' ref={setRef('first_name')}  placeholder='enter your first name' onChange={handleChange}/>
<Input name='last_name' ref={setRef('last_name')} placeholder='enter your last name' onChange={handleChange}/>
<Input name='email' ref={setRef('email')} placeholder='enter your email' onChange={handleChange}/>
<Input name='phone' ref={setRef('phone')} placeholder='enter your phone number' onChange={handleChange}/>
<Input type='button' value='update' onClick={handleSubmit} />
</Form>
</DivApp>)
}
//5 
export const DeleteUser = () => {
    const[userData,setUserData] = useState('')
    const[error,setError] = useState({isErr:false ,msg:'' })
    //get name of ref and return callback to set ref element 
    const setRef = (name)=> (el) => elRef.current[name] = el
    const elRef = useRef({});

    const handleSubmit = async () => {
        try{
       let {data} = await deleteUser(elRef.current['id'].value)
       setUserData(data)
        }
       catch (e){
        
        setError({isErr: true, msg: e.response?.data?.status});
    }
      }

    const shapeUserById = () => 
         <>
         <h2 style={{color:'red'}}> user number  {elRef.current['id'].value} deleted</h2>
         <p>
         {`${userData.first_name} ${userData.last_name}`} </p> 
         <p> {`${userData.email}`}</p>
         </>
          
        
    return (
    <>
    <Input ref={setRef('id')}  placeholder='Enter your id for delete' />
    <Input type='button' value='delete' onClick={handleSubmit} />
    {userData ? shapeUserById() : null }
    <p style={{color:'red'}}>{error.isErr ? error.msg : null }</p>
    </>

    )
}

const Title = styled.h1 `
font-family: 'Roboto', sans-serif;
font-size: 2rem;
margin-top:5rem;
`
const DivApp = styled.div`
background-color: #282c34;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: 2rem;
color: white;`

const Form = styled.form`
display: flex;
flex-direction: column;

`

const Input = styled.input`
margin-top:1rem;
border-radius: 5px;
min-height:3rem;
min-width:18rem;
box-shadow: 5px 5px 15px 5px;
outline: none;
font-family: 'Roboto', sans-serif;
text-align:center;
`