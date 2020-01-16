import React from 'react'

export default function Article(props) {
  const id = props.match.params.id

  return (
    <div className="container section article">
      <div className="card">
        <div className="card-content">
          <span className="card-title">Article Title - {id}</span>
          <p> </p>
        </div>
        <div className="card-action">
          <div>Author</div>
          <div>Date posted</div>
        </div>
      </div>
    </div>
  )
}
