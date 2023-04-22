import React from 'react'
import Tags from '../Tags'
import styles from "./Galeria.module.scss"
import fotos from "./fotos.json"
import favorito from "./favorito.png"
import open from "./open.png"

export default function Galeria() {
  console.log("nova branch criada para alteracoes no projeto")
  return (
        <section className={styles.galeria}>
            <h2>navegue pela galeria</h2>
            <Tags />
            <ul className={styles.galeria__cards}>
                {fotos.map((foto) => {
                    return (
                        <li key={foto.id} className={styles.galeria__card}>
                            <img
                            className={styles.galeria__imagem} 
                            src={foto.imagem} 
                            alt={foto.titulo} 
                            />
                            <p className={styles.galeria__descricao}>
                                {foto.titulo}
                            </p>
                            <div>
                                <p>{fotos.creditos}</p>
                                <span>
                                    <img src={favorito} alt="icone coracao de curtir" />
                                    <img src={open} alt="icone de abrir modal" />
                                </span>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </section>
  )
}
