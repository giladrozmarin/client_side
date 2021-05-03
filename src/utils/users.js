import axios from 'axios'


//get
export const getAllUsers = async () =>  await axios.get(`http://localhost:3030/api/users/`)

//getById 
export const getUserById = async (id) => await axios.get(`http://localhost:3030/api/users/${id}`)

//post 
export const createUser = async (dataForm) => await axios.post('http://localhost:3030/api/users',{...dataForm})

//put 
export const updateUser = async (id,dataForm) => await axios.put(`http://localhost:3030/api/users/${id}`,{...dataForm})

//delete 
export const deleteUser = async (id) => await axios.delete(`http://localhost:3030/api/users/${id}`)

