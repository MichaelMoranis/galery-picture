import React from 'react'
import home from "./home-ativo.png"
import maisCurtidas from "./mais-curtidas-inativo.png"
import maisVistas from "./mais-vistas-inativo.png"
import SurpreendaMe from "./surpreenda-me-inativo.png"
import novas from "./novas-inativo.png"
import styles from "./Menu.module.scss"

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__lista}>
        <li className={styles.menu__item}>
            <img src={home} alt="" />
            <a href="/">inicio</a>
        </li>
        <li className={styles.menu__item}>
            <img src={maisCurtidas} alt="" />
            <a href="/">mais curtidas</a>
        </li>
        <li className={styles.menu__item}>
            <img src={maisVistas} alt="" />
            <a href="/">mais vistas</a>
        </li>
        <li className={styles.menu__item}>
            <img src={novas} alt="" />
            <a href="/">novas</a>
        </li>
        <li className={styles.menu__item}>
            <img src={SurpreendaMe} alt="" />
            <a href="/">surpeenda-me</a>
        </li>
      </ul>
    </nav>
  )
}
