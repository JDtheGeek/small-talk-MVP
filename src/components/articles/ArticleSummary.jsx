import React from 'react'
import sampleImage from '../images/sample-1.jpg'

const ArticleSummary = () => {
  return (
    <div className="card horizontal z-depth-2 article-summary">
      <div className="card-image">
        <img src={sampleImage} alt='sample' />
        <span className="card-title">Article Title</span>
      </div>
      <div className="card-content grey-text text-darken-3">
        <p>Description</p>
        <p>Posted By USERNAME</p>
        <p><a href="#tbc">Read Article</a></p>
      </div>
    </div>
  )
}

export default ArticleSummary