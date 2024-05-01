import React from 'react'
import './nowPlayingBar.css'

const nowPlayingBar = () => {
  return (
    <> 
    <div className='now-playing-bar'>
    <footer className='footer-playing-bar'>
        <div className='playing-bar'>
            <div className='left-footer'>
                <div className='contain-leftfooter'>
                    <div className='img-playingb'>
                        <button className='imgcont'>
                            <div className='iCPB'>
                                <img
                                    className='img-conf'
                                    src='https://i.scdn.co/image/ab67616d00004851bcd0b5af3510ada2a00c3522'
                                    alt='Imagen de la canción'
                                />
                            </div>
                        </button>
                    </div>
                    <div className='tema-playingb'>
                        <div className='nameSong'>Me Voy Antes</div>
                        <div className='btt-playingb'>Luis7Lunes, Afterclass, Fa-Zeta, Gambeta</div>
                    </div>
                    <button className='add-list'>
                        <span aria-hidden='true' className='textAddList'>
                            <svg
                                data-encore-id='icon'
                                role='img'
                                aria-hidden='true'
                                viewBox='0 0 16 16'
                                className='Svg-sc-ytk21e-0 dYnaPI'
                            >
                                <path d='M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z' />
                                <path d='M11.75 8a.75.75 0 0 1-.75.75H8.75V11a.75.75 0 0 1-1.5 0V8.75H5a.75.75 0 0 1 0-1.5h2.25V5a.75.75 0 0 1 1.5 0v2.25H11a.75.75 0 0 1 .75.75z' />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
            <div className='mid-footer'>
                <div className='player-controls'>
                    <div className='up-control'>
                        <div className='left-control'>
                            <button className='all-controls'>
                                <i className='fa-solid fa-shuffle fa-xl playing-btts'></i>
                            </button>
                            <button className='all-controls'>
                                <i className='fa-solid fa-backward-step fa-xl playing-btts'></i>
                            </button>
                        </div>
                        <button className='play-btt'>
                            <i className='fa-solid fa-play fa-lg play-bttcs' style={{ paddingLeft: '2px'}}></i>
                        </button>
                        <div className='right-control'>
                            <button className='all-controls'>
                                <i className='fa-solid fa-forward-step fa-xl playing-btts'></i>
                            </button>
                            <button className='all-controls'>
                                <i className='fa-solid fa-repeat fa-xl playing-btts'></i>
                            </button>
                        </div>
                    </div>
                    <div className='down-control'>
                        <div className='textProgress'>1:12</div>
                        <div className='bar-progres'>
                            <div className='time-progres'>
                                <div className='tProgres'>
                                    <div className='contentTimeProgres'>
                                        <div className='countProgres'></div>
                                    </div>
                                    <div className='countProgreshov'></div>
                                </div>
                            </div>
                        </div>
                        <div className='textProgress tPLeft'>1:32</div>
                    </div>
                </div>
            </div>
            <div className='right-footer'>
                <button className='btt-bttnrepro' data-active='false'>
                    <span className='btt-icons'>
                        <svg data-encore-id='icon' role='img' aria-hidden='true' viewBox='0 0 16 16' className='span-bttnicon'>
                            <path d='M11.196 8 6 5v6l5.196-3z'></path>
                            <path d='M15.002 1.75A1.75 1.75 0 0 0 13.252 0h-10.5a1.75 1.75 0 0 0-1.75 1.75v12.5c0 .966.783 1.75 1.75 1.75h10.5a1.75 1.75 0 0 0 1.75-1.75V1.75zm-1.75-.25a.25.25 0 0 1 .25.25v12.5a.25.25 0 0 1-.25.25h-10.5a.25.25 0 0 1-.25-.25V1.75a.25.25 0 0 1 .25-.25h10.5z'></path>
                        </svg>
                    </span>
                </button>

                {/* Botón 2 */}
                <button className='btt-bttnrepro' data-active='false'>
                    <span className='btt-icons'>
                        <svg
                            data-encore-id='icon'
                            role='img'
                            aria-hidden='true'
                            viewBox='0 0 16 16'
                            className='span-bttnicon'
                        >
                            <path d='M13.426 2.574a2.831 2.831 0 0 0-4.797 1.55l3.247 3.247a2.831 2.831 0 0 0 1.55-4.797zM10.5 8.118l-2.619-2.62A63303.13 63303.13 0 0 0 4.74 9.075L2.065 12.12a1.287 1.287 0 0 0 1.816 1.816l3.06-2.688 3.56-3.129zM7.12 4.094a4.331 4.331 0 1 1 4.786 4.786l-3.974 3.493-3.06 2.689a2.787 2.787 0 0 1-3.933-3.933l2.676-3.045 3.505-3.99z'></path>
                        </svg>
                    </span>
                </button>

                {/* Botón 3 */}
                <button className='btt-bttnrepro' data-active='false'>
                    <span className='btt-icons'>
                        <svg
                            data-encore-id='icon'
                            role='img'
                            aria-hidden='true'
                            viewBox='0 0 16 16'
                            className='span-bttnicon'
                        >
                            <path d='M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 0 1 3.5 1h9a2.5 2.5 0 0 1 0 5h-9A2.5 2.5 0 0 1 1 3.5zm2.5-1a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2h-9z'></path>
                        </svg>
                    </span>
                </button>

                {/* Botón 4 */}
                <button className='btt-bttnrepro' data-active='false'>
                    <span className='btt-icons'>
                        <svg
                            data-encore-id='icon'
                            role='presentation'
                            aria-hidden='true'
                            viewBox='0 0 16 16'
                            className='span-bttnicon'
                        >
                            <path d='M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15h-6.5A1.75 1.75 0 0 1 6 13.25V2.75zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h6.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25h-6.5zm-6 0a.25.25 0 0 0-.25.25v6.5c0 .138.112.25.25.25H4V11H1.75A1.75 1.75 0 0 1 0 9.25v-6.5C0 1.784.784 1 1.75 1H4v1.5H1.75zM4 15H2v-1.5h2V15z'></path>
                            <path d='M13 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-1-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z'></path>
                        </svg>
                    </span>
                </button>
                <div className='btt-volumerepro'>
                    <button className='btt-bttnrepro' data-active='false'>
                        <span className='btt-icons'>
                            <svg
                                data-encore-id='icon'
                                role='presentation'
                                aria-label='Volumen alto'
                                aria-hidden='true'
                                id='volume-icon'
                                viewBox='0 0 16 16'
                                className='span-bttnicon'
                            >
                                <path d='M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z'></path>
                                <path d='M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z'></path>
                            </svg>
                        </span>
                    </button>
                    <div style={{ width: '100%' }}>
                        <div className='volume-progres'>
                            <div className='bar-progres'>
                                <div className='time-progres'>
                                    <div className='tProgres'>
                                        <div className='contentTimeProgres'>
                                            <div className='volumeProgres'></div>
                                        </div>
                                        <div className='volumeProgreshov'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Botón 5 */}
                <button className='btt-bttnrepro' data-active='false'>
                    <span className='btt-icons'>
                        <svg
                            data-encore-id='icon'
                            role='img'
                            aria-hidden='true'
                            viewBox='0 0 16 16'
                            className='span-bttnicon'
                        >
                            <path d='M16 2.45c0-.8-.65-1.45-1.45-1.45H1.45C.65 1 0 1.65 0 2.45v11.1C0 14.35.65 15 1.45 15h5.557v-1.5H1.5v-11h13V7H16V2.45z'></path>
                            <path d='M15.25 9.007a.75.75 0 0 1 .75.75v4.493a.75.75 0 0 1-.75.75H9.325a.75.75 0 0 1-.75-.75V9.757a.75.75 0 0 1 .75-.75h5.925z'></path>
                        </svg>
                    </span>
                </button>

                {/* Botón 6 */}
                <button className='btt-bttnrepro' data-active='false'>
                    <span className='btt-icons'>
                        <svg
                            data-encore-id='icon'
                            role='img'
                            aria-hidden='true'
                            viewBox='0 0 16 16'
                            className='span-bttnicon'
                        >
                            <path d='M6.53 9.47a.75.75 0 0 1 0 1.06l-2.72 2.72h1.018a.75.75 0 0 1 0 1.5H1.25v-3.579a.75.75 0 0 1 1.5 0v1.018l2.72-2.72a.75.75 0 0 1 1.06 0zm2.94-2.94a.75.75 0 0 1 0-1.06l2.72-2.72h-1.018a.75.75 0 1 1 0-1.5h3.578v3.579a.75.75 0 0 1-1.5 0V3.81l-2.72 2.72a.75.75 0 0 1-1.06 0z'></path>
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    </footer>
    <script src='script.js'></script>
</div>
    </>
  )
}

export default nowPlayingBar
