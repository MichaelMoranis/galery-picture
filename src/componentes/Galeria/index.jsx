import React from 'react'
import Tags from '../Tags'
import styles from "./Galeria.module.scss"
import fotos from "./fotos.json"
import Cards from './Cards'

export default function Galeria() {
  console.log("nova branch criada para alteracoes no projeto")
  return (
        <section className={styles.galeria}>
            <h2>navegue pela galeria</h2>
            <Tags />
            <Cards itens={fotos} styles={styles} />
        </section>
  )
}
