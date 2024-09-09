import React from 'react'
import tecImg from './assets/Vector (8).png'
import PractImg from './assets/Vector (9).png'
import CorImg from './assets/Vector (10).png'
import '../benefits/benefits.css'

function Benefits() {
    return (
        <section className='benefits'>
            <h4 className='benefitsTitle' id='index'>Lo que aprenderas</h4>
            <p className='benefitsParagraf'>
                En este seminario intensivo, profundizaremos en los aspectos clave del levantamiento olímpico
                para que puedas llevar tu rendimiento al siguiente nivel.
                Te guiaremos a través de cada técnica fundamental, desde los movimientos básicos hasta los detalles
                más finos que marcan la diferencia entre un buen levantamiento y uno excelente
            </p>
            <div className='learningPath'>
                <ul className='seminarIndex'>
                    <li className='index'>Tecnica y practica de snatch</li>
                    <br />
                    <li className='index'>Tecnica y practica de clean and jerk</li>
                    <br />
                    <li className='index'>Movilidad y fleibilidad</li>
                    <br />
                    <li className='index'>Prevencion de lesiones</li>
                    <br />
                    <li className='index'>Metodologia de enseñanza</li>
                    <br />
                    <li className='index'>Direccion y correccion de errores</li>
                </ul>
                <img className='seminarIndexPhoto' src="https://lh6.googleusercontent.com/proxy/hJrKLYDdKw8k1p2RhlWBHQPWXZqMYv7j4ehq2sXD2CQDGe_KqiuiBtFxyEsR9EhS70S-XOyIIGdMQc69jIF-1ijxk9-HsX_W_h9I7pcOBSSfyPcG4Rs-_Q6kBIV1GV_-_ygkLy-v" alt="" />
            </div>
            <div className='perks'>
                <div>
                    <img className='perkImg' src={tecImg} alt="" />
                    <h5>Tecnica</h5>
                    <p className='perkText'>Fundamentos teoricos para un buen levantamiento</p>
                </div>
                <div>
                    <img className='perkImg' src={PractImg} alt="" />
                    <h5>Practica</h5>
                    <p className='perkText'>Fase de implementacion de los conceptos aprendidos</p>
                </div>
                <div>
                    <img className='perkImg' src={CorImg} alt="" />
                    <h5>Correccion</h5>
                    <p className='perkText'>Deteccion y correccion de errores detectados en la fase practica</p>
                </div>
            </div>
        </section>
    )
}

export default Benefits
