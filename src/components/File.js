import React from 'react'
import DeleteFile from "./DeleteFile";

const File = ({imageURL, description, likes}) => {
  return (
      <article className={"photo"}>
          <img src={imageURL} alt={description}/>
          <div className={"photo-info"}>
              <div>
                  <p>{likes} likes</p>
              </div>
              <div>
                  <DeleteFile />
              </div>
          </div>
      </article>
  )
}

export default File
