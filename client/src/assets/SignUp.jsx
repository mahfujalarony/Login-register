import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function SignUp() {

    const[name, setName] = useState()
    const[email, setEmail] = useState()
    const[password, setPassword] = useState()
    const navigate =  useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault() 
        axios.post("http://localhost:2001/register", {name, email, password})
        .then(result => { console.log(result)
        navigate("/login")
        })
        .catch(err => console.log(err))
    }

  return (
    <div className='d-flex justify-content-center align-items-center bg-body-tertiary vh-100'>
        <div className='bg-body-secondary p-3 rounded w-50'>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="email">
                        <strong>Name</strong>
                    </label>
                    <input type="text" placeholder='Enter Name'
                    autoComplete='off'
                    name='email'
                    className='form-control rounded-0'
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className='mb-3'>
                    <label htmlFor="email">
                        <strong>Email</strong>
                    </label>
                    <input type="email" placeholder='Enter Email' 
                    className='form-control rounded-0'
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='mb-3'>
                    <label htmlFor="password">
                        <strong>Password</strong>
                    </label>
                    <input type="password" placeholder='Enter Password' 
                    className='form-control rounded-0'
                    onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>


                <button type='submit' className='btn btn-success w-100 rounded-0'>Register</button>

                <p>Alrady Have an Account</p>

                <Link to="/login" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
            </form>
        </div>
    </div>
  )
}

export default SignUp