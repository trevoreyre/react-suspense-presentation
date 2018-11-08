import React from 'react'
import { unstable_createResource as createResource } from 'react-cache'

const imgResource = createResource(
  src =>
    new Promise(resolve => {
      const Img = new Image()
      Img.src = src
      Img.onload = resolve
    })
)

const Img = ({ src, alt, ...props }) => {
  imgResource.read(src)
  return <img src={src} alt={alt} {...props} />
}

export default Img
