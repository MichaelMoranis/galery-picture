import React from 'react'
import home from "../assets/icones/home-ativo.png"
import maisCurtidas from "../assets/icones/mais-curtidas-inativo.png"
import maisVistas from "../assets/icones/mais-vistas-inativo.png"
import SurpreendaMe from "../assets/icones/surpreenda-me-inativo.png"
import novas from "../assets/icones/novas-inativo.png"

export default function Menu() {
  return (
    <ul>
        <li>
            <img src={home} alt="" />
            <a href="/">inicio</a>
        </li>
        <li>
            <img src={maisCurtidas} alt="" />
            <a href="/">mais curtidas</a>
        </li>
        <li>
            <img src={maisVistas} alt="" />
            <a href="/">mais vistas</a>
        </li>
        <li>
            <img src={novas} alt="" />
            <a href="/">novas</a>
        </li>
        <li>
            <img src={SurpreendaMe} alt="" />
            <a href="/">surpeenda-me</a>
        </li>
    </ul>
  )
}
