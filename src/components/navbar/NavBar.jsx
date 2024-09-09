import React from 'react'
import styles from './NavBar.module.css'

function NavBar() {
    return (
        <header className={styles.navbar}>
            <nav>
                <ul className={styles.navul}>
                    <li><a className={styles.navlink} href="#why">Porque?</a></li>
                    <li><a className={styles.navlink} href="#index">Temas</a></li>
                    <li><a className={styles.navlink} href="#dates">Fechas</a></li>
                    <li><a className={styles.navlink} href="#goal">Objetivo</a></li>
                    <li><a className={styles.navlink} href="#signup">Inscribirme</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar
