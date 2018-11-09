import React, { Suspense } from 'react'
import { unstable_createResource as createResource } from 'react-cache'
import { getUser } from 'api'
import Img from 'components/Img'

const authorResource = createResource(id => getUser(id))

const PostAuthor = ({ id }) => {
  const author = authorResource.read(id)
  return (
    <>
      <div className="author-avatar">
        <Suspense
          fallback={
            <img
              src={author.avatarPlaceholder}
              alt="Author avatar"
              className="image-placeholder"
            />
          }
          maxDuration={100}
        >
          <Img src={author.avatarHd} alt="Author avatar" />
        </Suspense>
      </div>
      <h3 className="author-name">{author.name}</h3>
    </>
  )
}

export default PostAuthor
