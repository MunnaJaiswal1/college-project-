import React from 'react'

const Register = () => {
 
  return (
    <div>
      <form action="">
        <div>
          <label htmlFor='username'>
            Name:
          </label>
          <input type="text" autoComplete='off'
          name="username" id="username" placeholder='enter your name'>
          </input>
        </div>

        

        <div>
          <label htmlFor='username'>
            Address:
          </label>
          <input type="text" autoComplete='off'
          name="username" id="username" placeholder='enter your address'>
          </input>
        </div>

        <div>
          <label>Gender:</label>
          <br/>
          <input type="radio" name="gender" value="male"/>
          <label>Male</label>
         
          <br/>
          <input type="radio" name="gender" value="female" />
          <label>Female</label>
         
        </div>

        <div>
          <label htmlFor='age'>
            Age:
          </label>
          <input type="text" autoComplete='off'
          name="age" id="age" placeholder='enter your age'>
          </input>
        </div>

        <div>
          <label htmlFor='phone'>
            Contact Number:
          </label>
          <input type="text" autoComplete='off'
          name="phone" id="phone" placeholder='enter contact number'>
          </input>
        </div>

        <div>
          <label htmlFor='email'>
            Email
          </label>
          <input type="text" autoComplete='off'
          name="email" id="email" placeholder='enter your email id'>
          </input>
        </div>

        <div>
          <label htmlFor='password'>
            Password
          </label>
          <input type="password" autoComplete='off'
          name="password" id="password" placeholder='enter your password'>
          </input>
        </div>

        
          <button type="submit">Sign up</button>
     
      </form>
    </div>

  )
}

export default Register
