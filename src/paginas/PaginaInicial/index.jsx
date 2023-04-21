import banner from "./banner.png"
import Cabecalho from "../../componentes/Cabecalho"
import Menu from "../../Menu"
import styles from "./PaginaInicial.module.scss"

export default function PaginaInicial() {
    return (
        <>
          <Cabecalho />
          <main>
             <section className={styles.principal}>
                <Menu />
                <div className={styles.principal__imagem}>
                   <h1>a galeria mais completa do spaco</h1>
                   <img src={banner} alt="a imagem da terra vista do espaco" />
                </div>
             </section>
          </main>
        </>
        )
}