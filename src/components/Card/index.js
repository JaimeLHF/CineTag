import React from 'react'
import styles from './Card.module.css'
import iconeFavortirar from './favorite_outline.png'
import iconeDesFavortirar from './favorite.png'
import { useFavoritosContext } from 'Context/Favoritos'
import { Link } from 'react-router-dom'

export default function Card({ id, titulo, capa }) {

  const { favorito, addFavorito } = useFavoritosContext();
  const fav = favorito.some((i) => i.id === id);
  const icone = fav ? iconeDesFavortirar : iconeFavortirar;

  return (
    <div className={styles.container}>
      <Link to={`videos/${id}`} className={styles.link}>
        <img src={capa} alt={titulo} className={capa} />
      </Link>
      <h2>{titulo}</h2>
      <img src={icone} alt='Favoritar Filme' className={styles.favoritar} onClick={() => { addFavorito({ id, titulo, capa }) }} />
    </div >
  )
}
