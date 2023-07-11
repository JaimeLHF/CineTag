import Banner from 'components/Banner'
import React from 'react'
import styles from './Favoritos.module.css'
import Title from 'components/Title'
import Card from 'components/Card'
import { useFavoritosContext } from 'Context/Favoritos'

export default function Favoritos() {

  const { favorito } = useFavoritosContext();

  return (
    <>
      <Banner imagem='favoritos' />
      <Title>
        <h1>Meus Favoritos</h1>
      </Title>
      <section className={styles.container}>
        {favorito.map((e) => {
          return (
            <Card {...e} key={e.id} />
          )
        })}
      </section>
    </>
  )
}
