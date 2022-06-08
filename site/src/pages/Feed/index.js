import './index.scss';
import { Link } from 'react-router-dom';

export default function Feed() {

    return (

        <div className='ma'>

            <header className='container1'>

                    <Link to="../perfil">
                    <img src='./images/Screenshot_20220502-223132-694.png' className='imgperfil' />
                    </Link>
                <div className='bo1'>
                    <Link to="../landing-page">
                        <p className='b1-txt'>Sair</p>
                        </Link>
                </div>
            </header>

            <nav className='container2'>

                <div>
                    <h2  className='txt1'>O MELHOR DO ART ATTACK</h2>
                    <h3  className='txt1'>CURADORIA DO ART ATTACK</h3>
                </div>

                <div>
                    <input type='search' placeholder='Pesquisar todos os projetos' className='busca'></input>
                </div>
            </nav>

            <main className='container4'>

                <div className='sub1'>
                    <div className='sub-1-2'>
                        <div>
                            <img src='./images/fotografiaa.jpg' className='img0' />
                        </div>

                        <div className='sub1-3'>

                            <div className='sub-1-4'>

                                <img src='./images/64572.png' className='imgusuario'>


                                </img>
                                <p className='txt2'>usuario1</p>

                            </div>

                            <div>
                                <a>
                                    <img src='./images/Gold-Star-PNG-Transparent-Image.png' className='star' />
                                </a>
                            </div>

                        </div>
                    </div>
                    <div className='sub-1-2'>
                        <div>
                            <img src='./images/ilustração digital.jpg' className='img0' />
                        </div>

                        <div className='sub1-3'>

                            <div className='sub-1-4'>

                                <img src='./images/64572.png' className='imgusuario'>


                                </img>
                                <p className='txt2'>usuario1</p>

                            </div>

                            <div>
                                <a>
                                    <img src='./images/Gold-Star-PNG-Transparent-Image.png' className='star' />
                                </a>
                            </div>

                        </div>
                    </div>
                    <div className='sub-1-2'>
                        <div>
                            <img src='./images/colagem.jpg' className='img0' />
                        </div>

                        <div className='sub1-3'>

                            <div className='sub-1-4'>

                                <img src='./images/64572.png' className='imgusuario'>


                                </img>
                                <p className='txt2'>usuario1</p>

                            </div>

                            <div>
                                <a>
                                    <img src='./images/Gold-Star-PNG-Transparent-Image.png' className='star' />
                                </a>
                            </div>

                        </div>
                    </div>

                </div>
            
                <div className='sub1'>
                    <div className='sub-1-2'>
                        <div>
                            <img src='./images/1dbe50dd-b345-4113-9785-51d8247e43a1.jpg' className='img0' />
                        </div>

                        <div className='sub1-3'>

                            <div className='sub-1-4'>

                                <img src='./images/64572.png' className='imgusuario'>


                                </img>
                                <p className='txt2'>usuario1</p>

                            </div>

                            <div>
                                <a >
                                    <img src='./images/Gold-Star-PNG-Transparent-Image.png' className='star' />
                                </a>
                            </div>

                        </div>
                    </div>
                    <div className='sub-1-2'>
                        <div>
                            <img src='./images/Screenshot_20220501-111439-460.png' className='img0' />
                        </div>

                        <div className='sub1-3'>

                            <div className='sub-1-4'>

                                <img src='./images/64572.png' className='imgusuario'>


                                </img>
                                <p className='txt2'>usuario1</p>

                            </div>

                            <div>
                                <a>
                                    <img src='./images/Gold-Star-PNG-Transparent-Image.png' className='star' />
                                </a>
                            </div>

                        </div>
                    </div>
                    <div className='sub-1-2'>
                        <div>
                            <img src='./images/Screenshot_20220502-224756-805.png' className='img0' />
                        </div>

                        <div className='sub1-3'>

                            <div className='sub-1-4'>

                                <img src='./images/64572.png' className='imgusuario'>


                                </img>
                                <p className='txt2'>usuario1</p>

                            </div>

                            <div>
                                <a >
                                    <img src='./images/Gold-Star-PNG-Transparent-Image.png' className='star' />
                                </a>
                            </div>

                        </div>
                    </div>

                </div>

            </main>

        </div>

    )

}