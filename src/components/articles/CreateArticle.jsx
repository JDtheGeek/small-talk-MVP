import React, { useState } from 'react'
import { connect } from 'react-redux'
import ImageUpload from './FileUpload'
import { createArticle } from '../../redux/actions/articleActions'

function CreateArticle(props) {

  const [state, setState] = useState({
    title: '',
    content: '',
    date: Date.now
  })

  const handleChange = (event) => {
    const value = event.target.value
    const inputId = event.target.id
    setState(prevState => {
      return { ...prevState, [inputId]: value }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(state)
    props.createArticle(state)
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text darken-3">New Article</h5>
        <hr />
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="content">Text</label>
          <textarea id="content" className="materialize-textarea" onChange={handleChange} ></textarea>
        </div>
        <div>
          <ImageUpload onChange={handleChange} />
        </div>
        <div className="input-field">
          <button className="btn green">Create</button>
        </div>
      </form>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    createArticle: (article) => dispatch(createArticle(article))
  }
}

export default connect(null, mapDispatchToProps)(CreateArticle)