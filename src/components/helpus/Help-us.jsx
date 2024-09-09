import React from 'react'
import img from './assets/logo torneo 2024.png'
import './helpus.css'

function HelpUs() {
    return (
        <section>
            <aside>
                <br />
                <br />
                <br />
                <br />
                <h4 id='goal'>
                    Ayudanos a viajar al
                    Torneo Nacional de Pesas
                </h4>
                <br />
                <p className='helpText'>
                    Al reservar tu cupo en este seminario, no solo estarás invirtiendo en tu crecimiento como atleta,
                    sino que también estarás apoyando a nuestro equipo en un objetivo aún mayor.
                    Con tu inscripción, estarás contribuyendo directamente a que podamos viajar al Campeonato Nacional de Pesas en noviembre,
                    que se llevará a cabo en San Carlos de Bariloche. Este evento es crucial para nosotros,
                    y tu participación nos ayudará a representar a nuestra comunidad en una de las competencias más importantes del país.
                    ¡Gracias por ser parte de este sueño!
                </p>
            </aside>
            <br />
            <br />
            <img className='tournamentImg' src={img} alt="" />
        </section>
    )
}

export default HelpUs