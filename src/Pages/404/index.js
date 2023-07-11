import styles from './NotFound.module.css'
import React from 'react'

export default function NotFound() {
  return (
   <section className={styles.container}>    
   <h2>Opps...!</h2>
   <p>O Conteúdo não foi encontrado!</p>
   </section>
  )
}
