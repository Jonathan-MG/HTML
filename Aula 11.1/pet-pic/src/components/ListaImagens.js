import React from 'react'
import Imagem from './Imagem'

const ListaImagens = ({ pics, imgStyle }) => {
  return (
    pics.map((pic) => {
      return (
        <Imagem
          url={pic.src.medium}
          alt={pic.alt}
          imgStyle={imgStyle}
        />
      )
    })
  )
}

export default ListaImagens