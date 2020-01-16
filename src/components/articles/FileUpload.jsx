import React from 'react'

export default function ImageUpload(props) {
  return (
    <div className="file-field input-field">
      <div className="btn green">
        <span>Upload Images</span>
        <input type="file" name="file-input" multiple {...props} />
        <div className='file-path-wrapper'>
          <input type="text" className="file-path validate" placeholder='Upload one or more images' />
        </div>
      </div>
    </div>
  )
}
