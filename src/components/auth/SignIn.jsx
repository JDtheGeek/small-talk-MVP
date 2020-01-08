import React from 'react'

export default function SignIn() {

  function handleChange(event) {
    console.log(event)
  }

  function handleSubmit(event) {
    console.log('submit:', event)
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text darken-3">Sign In</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" onChange={handleChange} />
        </div>
        <div className="input-field">
          <button className="btn green">Log In</button>
        </div>
      </form>
    </div>
  )
}
