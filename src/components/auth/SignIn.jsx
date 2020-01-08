import React, { useState } from 'react'

export default function SignIn() {

  const [signInValues, setSignInValues] = useState({
    email: '',
    password: ''
  })

  const handleChange = (event) => {
    const value = event.target.value
    const inputId = event.target.id
    setSignInValues(prevState => {
      return { ...prevState, [inputId]: value }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(signInValues)
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text darken-3">Sign In</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={handleChange} />
        </div>
        <div className="input-field">
          <button className="btn green">Log In</button>
        </div>
      </form>
    </div>
  )
}
