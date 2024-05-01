// eslint-disable-next-line no-unused-vars
import React from 'react'
import './leftcontent.css'
const leftcontent = () => {
  return (
    <>
    
    <div className='leftContentSpt'>
    <nav className='navLeftContent'>
        <div className='leftBox1'>
            <ul className='listLeft1'>
                <li className='leftOne'>
                    <a className='contentLeftOne' href=''>
                        <i className='fa-solid fa-house fa-lg icLeft1'></i>
                        <span className='textLeftOne'>Inicio</span>
                    </a>
                </li>
                <li className='leftOne'>
                    <a className='contentLeftOne' href=''>
                        <i className='fa-solid fa-magnifying-glass fa-lg icLeft1'></i>
                        <span className='textLeftOne'>Buscar</span>
                    </a>
                </li>
            </ul>
        </div>

        <div className='leftBox1 leftBox2'>
            <div className='listLeft2'>
                <header className='biblioMenu'>
                    <div className='bMBttns'>
                        <div className='bttnBiblio'>
                            <button className='bttnBiblioT'>
                                <span style={{ display: 'flex', marginInlineEnd: '12px' }}>
                                    <svg className='textBiblio' data-encore-id='icon' role='img' aria-hidden='true' viewBox='0 0 24 24'>
                                        <path d='M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z'></path>
                                    </svg>
                                </span>
                                Tu biblioteca
                            </button>
                        </div>
                        <button className='bttnBiblioT bordeBbttnBiblioT'>
                            <span style={{ display: 'flex' }} aria-hidden='true'>
                                <svg className='textBiblio2' data-encore-id='icon' role='img' aria-hidden='true' viewBox='0 0 16 16'>
                                    <path d='M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z'></path>
                                </svg>
                            </span>
                        </button>
                        <button className='bttnBiblioT bordeBbttnBiblioT'>
                            <span aria-hidden='true' style={{ display: 'flex' }}>
                                <svg className='textBiblio2' data-encore-id='icon' role='img' aria-hidden='true' viewBox='0 0 16 16'>
                                    <path d='M7.19 1A.749.749 0 0 1 8.47.47L16 7.99l-7.53 7.521a.75.75 0 0 1-1.234-.815.75.75 0 0 1 .174-.243l5.72-5.714H.75a.75.75 0 1 1 0-1.498h12.38L7.41 1.529a.749.749 0 0 1-.22-.53z'></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                </header>

                <div className='listBiblio'>
                    <div className='boxListBiblio'>
                        <div className='contentBoxListB'>
                            <section className='contentTextBLB1'>
                                <div className='textBLB1'>
                                    <span className='cTBLB1 ed1-cTBLB1'>
                                        Crea tu primera lista
                                    </span>

                                    <span className='cTBLB2'>
                                        Es muy fácil, y te echaremos una mano
                                    </span>
                                </div>
                                <div className='contentButtonBLB1'>
                                    <button className='ButtonBLB1'>
                                        <span className='cBLB1'>Crear lista</span>
                                    </button>
                                </div>
                            </section>
                        </div>
                    </div>

                    <div className='boxListBiblio'>
                        <div className='contentBoxListB'>
                            <section className='contentTextBLB1'>
                                <div className='textBLB1'>
                                    <span className='cTBLB1 ed1-cTBLB1'>
                                        Encuentra pódcasts que quieras seguir
                                    </span>

                                    <span className='cTBLB2'>
                                        Te avisaremos cuando salgan nuevos episodios
                                    </span>
                                </div>
                                <div className='contentButtonBLB1'>
                                    <button className='ButtonBLB1'>
                                        <span className='cBLB1'>Explorar pódcasts</span>
                                    </button>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</div>
    
    </>
  )
}

export default leftcontent
