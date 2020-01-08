import React, { useState } from 'react'

export default function SignUp() {

  const [signUpValues, setSignUpValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })

  const handleChange = (event) => {
    const value = event.target.value
    const inputId = event.target.id
    setSignUpValues(prevState => {
      return { ...prevState, [inputId]: value }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(signUpValues)
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text darken-3">Sign Up</h5>
        <hr />
        <div className="input-field">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={handleChange} />
        </div>
        <div className="input-field">
          <button className="btn green">Sign Up</button>
        </div>
      </form>
    </div>
  )
}
