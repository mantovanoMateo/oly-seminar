import React from 'react'
import '../why-us/why-us.css'

function WhyUs() {
    return (
        <section className='whyUs'>
            <img className='whyUsImg' src="https://media.telemundo47.com/2021/07/tlmd-lyu-xiaojun-china-tokyo-2020-GettyImages-1234354176.jpg?quality=85&strip=all&resize=1200%2C675" alt="" />
            <aside className='whyUsInfo'>
                <h4 id='why'>
                    Por que asistir a nuestro
                    seminario?
                </h4>
                <p>
                    Este seminario de levantamiento olímpico está diseñado para llevar tu rendimiento al siguiente nivel.
                    Aprenderás a perfeccionar las técnicas del Snatch y Clean and Jerk,
                    optimizando cada movimiento para maximizar tu fuerza y eficiencia.
                    Además, el curso aborda una de las problemáticas más comunes entre los levantadores: la falta de movilidad y la tendencia a sufrir lesiones.
                    Con nuestro enfoque integral, mejorarás tu flexibilidad y reducirás el riesgo de lesiones.
                    Así, no solo verás un progreso significativo en tus levantamientos, sino que también prolongarás tu carrera deportiva.
                </p>
            </aside>
        </section>
    )
}

export default WhyUs
