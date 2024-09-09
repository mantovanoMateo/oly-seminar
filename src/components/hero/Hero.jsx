import React from 'react'
import video from './assets/0903.mp4'
import styles from './Hero.module.css'

function Hero() {
  return (
    <section>
      <video autoPlay loop muted playsInline src={video}>
      </video>
      <h1>DOMINA EL LEVANTAMIENTO OLIMPICO: INSCRIBITE EN NUESTRO SEMINARIO</h1>
      <h2>Mejora tu tecnica y rendimiento de la mano de atletas experimentados</h2>
      <div className={styles.contactDiv}>
        <a className={styles.contactBtn} href="">ASEGURA TU CUPO AHORA MISMO</a>
      </div>

    </section>
  )
}

export default Hero
