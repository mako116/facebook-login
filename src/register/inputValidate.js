import React from 'react'
import {useForm} from 'react-hook-form'
import { Link } from 'react-router-dom';

const InputValidate = () => {
    const {register, formState:{errors},handleSubmit}=useForm()
    const onSubmit=(data)=>console.log(data);
  return (
    <div className='formed'>
 
 
  
      <form onSubmit={handleSubmit(onSubmit)}>
        <input 
            
            placeholder='First Name'
            {...register("name",{required:true,
                minLength:6,
                maxLength:12,
                
                })}
            />
            <error>
            {errors.email?.type === "required" && "your Email Needed biko"}

            {errors.number?.type === "minLength" && "Entered number is less"}
              {errors.number?.type === "maxLength" && "Entered number is too long bro"}

            </error> 

             <input
             {...register("number",{
                minLength:6,
                maxLength:12,
              })}
              placeholder="Last Name"
            />
            <error>
            {errors.email?.type === "required" && "your Email Needed biko"}

            {errors.number?.type === "minLength" && "Entered number is less"}
            {errors.number?.type === "maxLength" && "Entered number is too long bro"}

            </error>
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
         {errors.email?.type === "required" && "your Email Needed biko"}

              {errors.password?.type === "minLength" && "your Password Needed biko"}
              {errors.password?.type === "maxLength" && "your Password big na bro"}
            </error>

            <label>Date Of Birth</label>
              <input
              {...register('date', { required: true })}
              type="date"
             
            />
             <error>
              {errors.date?.type === "required" && "your Email Needed biko"}
              </error>
            <br></br>

            <label>Gender</label>


            <div className="form_check">
           
            <input
              {...register('radio', { required: true })}
              type="radio"
              
              className="form-check-input"
              
            />
             
            <label htmlFor="radio">Male</label>
          

            <input
              {...register('radio', { required: true })}
              type="radio"
              
              className="form-check-input"
              
            />
             <label htmlFor="radio">Female</label>
             <error></error>
             
           
        </div>
          
        <div className='Foot'>
      <p>By clicking sign up, you agree to our terms, data 
policy and Cookie <Link to="/HomeRun">policy </Link> .</p>

    </div>
            
        <button onClick={()=> handleSubmit()} type='submit'> LOG IN</button>
        <div className='ridge'></div>

      </form>
    </div>
  )
}

 


export default InputValidate
