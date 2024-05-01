import React from 'react'
import './rightContent.css'

const rightContent = () => {
  return (
    <>
    <div className='rightContentSpt'>
    <header className='topBar'>
        <div className='topBarBtns'>
            <button className='rightbtnlr'>
                <i className='fa-solid fa-chevron-left fa-lg rightbtnlrcolor'></i>
            </button>
            <button className='rightbtnlr'>
                <i className='fa-solid fa-chevron-right fa-lg rightbtnlrcolor'></i>
            </button>
        </div>
        <div className='topBarSrc'>
            <div className='topBarSrc2'>
                <div className='barSearch'>
                    <form role='search'>
                        <input type='text' className='inSearch1' placeholder='¿Qué quieres reproducir?' />
                    </form>
                    <div className='icSearch'>
                        <span style={{ flex: 1 }}>
                            <i className='fa-solid fa-magnifying-glass icSrcCss'></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div className='rightTopBar'>
            <div>
                <button className='userBtn uBNotf'>
                    <i className='fa-regular fa-bell fa-lg userNotf'></i>
                </button>
            </div>
            <button aria-label='Eric' className='userBtn'>
                <span className='textUserBtn'>E</span>
            </button>
        </div>
    </header>
    <div className='main-contain'>
        <div className='main-view-c'>
            <div className='contain-main'>
                <div className='spaceTopBar'></div>
                <div className='main-height'>
                    <main className='mainSpt'>
                        <section className='home-page'>
                            <div className='sptList'>
                                <div className='sptListOne'>
                                    <section className='listOne'>
                                        <div style={{ height: '35px' }}>
                                            <div className='headListOne'>
                                                <div className='leftHLO'>
                                                    <h2 className='TextLeftHLO'>
                                                        <a href=''>Hecho para Eric</a>
                                                    </h2>
                                                </div>
                                                <a className='rightHLO' href=''>
                                                    <span className='spRightHLO'>Mostrar todos</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className='contentListOne'>
                                            <div className='boxesListOne'>
                                                <div className='imgBoxLO'>
                                                    <div className='pdIMGBLO'>
                                                        <div className='imgsPlayList'>
                                                            <img src='https://newjams-images.scdn.co/image/ab67647800003f8a/dt/v3/release-radar/ab6761610000e5ebdc929eb73e0f19445f7ac703/esalt' alt='' />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='textBox1'>
                                                    <div className='contTextBox'>
                                                        <div className='textMix'>
                                                            <p className='tM1'>Radar de Novedades</p>
                                                        </div>
                                                        <div className='autorsMext'>
                                                            <p className='tA1'>Las novedades de los artistas que sigues y nuevos temas seleccionados para ti. Se actualiza cada viernes.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='boxesListOne'>
                                                <div className='imgBoxLO'>
                                                    <div className='pdIMGBLO'>
                                                        <div className='imgsPlayList'>
                                                            <img src='https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/WClOP8V-GW89qSUhg4j6Ug==/c2VzZXNlc2VzZXNlc2VzZQ==' alt=''/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='textBox1'>
                                                    <div className='contTextBox'>
                                                        <div className='textMix'>
                                                            <p className='tM1'>Descubrimiento semanal</p>
                                                        </div>
                                                        <div className='autorsMext'>
                                                            <p className='tA1'>Tu combinado semanal de música fresca. Temas elegidos especialmente para ti. Se actualiza cada lunes.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <section className='listOne'>
                                        <div>
                                            <div className='headListOne'>
                                                <div className='leftHLO'>
                                                    <h2 className='TextLeftHLO'>
                                                        <a href=''>Tus mixes más escuchados</a>
                                                    </h2>
                                                </div>
                                                <a className='rightHLO' href=''>
                                                    <span className='spRightHLO'>Mostrar todos</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className='contentListOne'>
                                            <div className='boxesListOne'>
                                                <div className='imgBoxLO'>
                                                    <div className='pdIMGBLO'>
                                                        <div className='imgsPlayList'>
                                                            <img src='https://seed-mix-image.spotifycdn.com/v6/img/artist/1iXMM6jVHyxeES7W3xxBUG/es/default' alt=''/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='textBox1'>
                                                    <div className='contTextBox'>
                                                        <div className='textMix'>
                                                            <p className='tM1'>Mix de Solitario soldado</p>
                                                        </div>
                                                        <div className='autorsMext'>
                                                            <p className='tA1'>Luis7Lunes, Keenwan y El Redcode</p>
                                                        </div>
                                                    </div>        
                                                </div>
                                            </div>
                                            <div className='boxesListOne'>
                                                <div className='imgBoxLO'>
                                                    <div className='pdIMGBLO'>
                                                        <div className='imgsPlayList'>
                                                            <img src='https://seed-mix-image.spotifycdn.com/v6/img/artist/50u2mXgysmTttY0BizYWAo/es/default' alt=''/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='textBox1'>
                                                    <div className='contTextBox'>
                                                        <div className='textMix'>
                                                            <p className='tM1'>Mix de Movimiento Original</p>
                                                        </div>
                                                        <div className='autorsMext'>
                                                            <p className='tA1'>Bubaseta, Shamanes Crew y Chystemc</p>
                                                        </div>
                                                    </div>        
                                                </div>
                                            </div>
                                            <div className='boxesListOne'>
                                                <div className='imgBoxLO'>
                                                    <div className='pdIMGBLO'>
                                                        <div className='imgsPlayList'>
                                                            <img src='https://seed-mix-image.spotifycdn.com/v6/img/artist/1wGIhYkKWSq4yACtTkCkSX/es/default' alt=''/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='textBox1'>
                                                    <div className='contTextBox'>
                                                        <div className='textMix'>
                                                            <p className='tM1'>Mix de Canserbero</p>
                                                        </div>
                                                        <div className='autorsMext'>
                                                            <p className='tA1'>Granuja, Alcolirykoz y Cejaz Negraz</p>
                                                        </div>
                                                    </div>        
                                                </div>
                                            </div>
                                            <div className='boxesListOne'>
                                                <div className='imgBoxLO'>
                                                    <div className='pdIMGBLO'>
                                                        <div className='imgsPlayList'>
                                                            <img src='https://i.scdn.co/image/ab67616d00001e02498fac83e1aee9d7fff418d1' alt=''/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='textBox1'>
                                                    <div className='contTextBox'>
                                                        <div className='textMix'>
                                                            <p className='tM1'>Buscando Millones</p>
                                                        </div>
                                                        <div className='autorsMext'>
                                                            <p className='tA1'>Cejaz Negraz</p>
                                                        </div>
                                                    </div>        
                                                </div>
                                            </div>
                                            <div className='boxesListOne'>
                                                <div className='imgBoxLO'>
                                                    <div className='pdIMGBLO'>
                                                        <div className='imgsPlayList'>
                                                            <img src='https://seed-mix-image.spotifycdn.com/v6/img/hip_hop/3ygJTpJJIK7eEeC2EFRl9D/es/default' alt=''/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='textBox1'>
                                                    <div className='contTextBox'>
                                                        <div className='textMix'>
                                                            <p className='tM1'>Mix de hip hop</p>
                                                        </div>
                                                        <div className='autorsMext'>
                                                            <p className='tA1'>Alcolirykoz, Granuja, Luis7Lunes y más</p>
                                                        </div>
                                                    </div>        
                                                </div>
                                            </div>
                                            <div className='boxesListOne'>
                                                <div className='imgBoxLO'>
                                                    <div className='pdIMGBLO'>
                                                        <div className='imgsPlayList'>
                                                            <img src='https://i.scdn.co/image/ab67616d00001e0228f61734580994bdf0819891' alt=''/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='textBox1'>
                                                    <div className='contTextBox'>
                                                        <div className='textMix'>
                                                            <p className='tM1'>Manzanas a la vuelta</p>
                                                        </div>
                                                        <div className='autorsMext'>
                                                            <p className='tA1'>Doble Porción, Métricas Frías, Mañas Ru-Fino</p>
                                                        </div>
                                                    </div>        
                                                </div>
                                            </div>
                                            <div className='boxesListOne'>
                                                <div className='imgBoxLO'>
                                                    <div className='pdIMGBLO'>
                                                        <div className='imgsPlayList'>
                                                            <img src='https://seed-mix-image.spotifycdn.com/v6/img/artist/7Gi6gjaWy3DxyilpF1a8Is/es/default' alt=''/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='textBox1'>
                                                    <div className='contTextBox'>
                                                        <div className='textMix'>
                                                            <p className='tM1'>Mix de Junior H</p>
                                                        </div>
                                                        <div className='autorsMext'>
                                                            <p className='tA1'>Natanael Cano, Xavi y Chino Pacas</p>
                                                        </div>
                                                    </div>        
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <section className='listOne'>
                                        <div>
                                            <div className='headListOne'>
                                                <div className='leftHLO'>
                                                    <h2 className='TextLeftHLO'>
                                                        <a href=''>Escuchado recientemente</a>
                                                    </h2>
                                                </div>
                                                <a className='rightHLO' href=''>
                                                    <span className='spRightHLO'>Mostrar todos</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className='contentListOne'>
                                            <div className='boxesListOne'>
                                                <div className='imgBoxLO'>
                                                    <div className='pdIMGBLO'>
                                                        <div className='imgsPlayList'>
                                                            <img src='https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb740deb7c7f23d64e8aee3654/1/es/default' alt=''/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='textBox1'>
                                                    <div className='contTextBox'>
                                                        <div className='textMix'>
                                                            <p className='tM1'>Mix de diario 1</p>
                                                        </div>
                                                        <div className='autorsMext'>
                                                            <p className='tA1'>Ali Aka Mind, Canserbero, Alcolirykoz y más</p>
                                                        </div>
                                                    </div>        
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    </div>
</div>
</>
  )
}

export default rightContent
