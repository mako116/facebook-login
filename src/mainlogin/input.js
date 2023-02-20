import React from 'react'
import {useForm} from 'react-hook-form'
import { Link } from 'react-router-dom';
import './main.css'
const Input = () => {
  const {register, formState:{errors},handleSubmit}=useForm()
  const onSubmit=(data)=>console.log(data);
  return (
    <div className='forms'>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <input 
            
            required
            placeholder='names'
            {...register("name",{required:true, maxLength: 20})}
            />
            <error>
              {errors.name?.type === "required" && "your name Needed biko"}
            </error> */}
            {/* <input
             {...register("number",{
                minLength:6,
                maxLength:12,
              })}
              placeholder="firstname"
            />
            <div  className='error'>
            {errors.number?.type === "minLength" && "Entered number is less"}
            {errors.number?.type === "maxLength" && "Entered number is too long bro"}

            </div> */}
        <input 
            placeholder='Email'
            {...register("email",{required:true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i })}
             
             />
            <error>
              {errors.email?.type === "required" && "your Email Needed biko"}
              {errors.email?.type === "pattern" && "Entered email is on wrong format"}
            </error>
        <input 
        placeholder='enter password' {...register("password",{
          required:true,
        minLength:5,
        maxLength:12,
        })}
         />
         <error>
              {errors.password?.type === "minLength" && "your Password Needed biko"}
              {errors.password?.type === "maxLength" && "your Password big na bro"}
            </error>
           
        <button onClick={()=> handleSubmit()} type='submit'> LOG IN</button>
         
      </form>
    </div>
  )
}

export default Input
