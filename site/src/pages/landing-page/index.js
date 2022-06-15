import './index.scss';
import { Link } from 'react-router-dom';

export default function LP() {

    return (
        <div className='naoseilp'>

            <main className="faixas">

                <section className="containeraa">

                    <div className='sub-1' >


                        <img src='../images/Logotipo.png' className='imgaa'></img>
                        <div className="btcont">
                            <Link to='../login'>
                             <a className="b0"> Login </a>
                             </Link>

                             <Link to='../cadastro'>
                            <a className='b1'>Cadastre-se</a>
                            </Link>
                            
                             </div>

                    </div>


                    <div className="sub-2 ">
                        <div className='sub-2-1'>

                            <div className='tam'>
                                <h1 className='txt-1'> Ei, artista!</h1>
                                <p className="nome-me" >Somos os artistas do novo mundo, o futuro da arte não permitam que a arte acabe faça sua parte e espalhe cores ao mundo</p>
                                <p className="nome-me">Faça parte do Attack como apreciador e/ou artista </p>
                            </div>
                        </div>
                        <div> <img src='../images/Cool Kids - Brainstorming.png' className='imgbr'></img> </div>
                    </div>




                </section>

                <section className="sub-3">
                    
                    <div className='tam2'>
                        <h1 className="txt-2">O ideal para você aqui</h1>
                        <p className='desc21'>Divulgue sua arte através de uma simples postagem, aceitamos divulgação por interesses financeiros, apenas deixe suas informações na obra para que os valorizadores de arte possam buscá-lo para uma colaboração futura!</p>
                    </div>

                    <div className="cards">
                        <div class="card-1">
                            <img src='../images/1dbe50dd-b345-4113-9785-51d8247e43a1.jpg' className='img222' />
                        </div>

                        <div class="card-2">
                            <img src='../images/Soft One.jpg' className='img222' />
                        </div>
                    </div>

                </section>

                <nav className="sub-4">

                    <div className="sub-4-1">

                        <div>
                            <img src='../images/Cool Kids - Cat.png' className='img5'></img>
                        </div>

                        <div ><h1 className='txt-5'>ART</h1>
                            <p className='p-1'>Todos aqui são acolhedores e inclusivos, afinal a arte é para todos</p></div>

                    </div>

                    <div className="sub-4-2">

                        <div>
                            <img src='../images/Cool Kids - Select.png' className='img4'></img>
                        </div>

                        <div >
                            <h1 className='txt-5'>CLICK</h1>
                            <p className='p-2'>Com apenas um click do mouse, você pode conhecer milhões de artistas e conhecer o mundo da arte</p>
                        </div>
                    </div>


                    <div className="sub-4-3">

                        <div>
                            <img src='../images/Cool Kids - Guitar.png' className='img3'></img>
                        </div>

                        <div className='tam4'>
                            <h1 className='txt-5'>ATTACK</h1>
                            <p className='p-3'>Aqui é um lugar de reconhecimento de arte, para aqueles que não são reconhecidos por outros</p>
                        </div>
                    </div>

                </nav>

                <section className="sub-5">


                    <div>
                        <p className="txt-7">Um lugar não só de artes, como também de negócios</p>
                    </div>

                    <div>
                        <img src='../images/Cool Kids - Digital Currency.png' className='imgcoin'></img>
                    </div>

                </section>

                <nav className="sub-6">


                    <div className='tam5' >
                        <h1 className="txt-8-2">Especialmente criado para você</h1>
                        <p className='txt-8-3'>Você se interessou pela nossa proposta? Faça seu <Link to='../cadastro'><a class="b3"> cadastro </a> </Link>
                            e espalhe sua arte mundo a fora através de nós </p>
                    </div>

                    <div className="sub-6-1">

                        <div className='sub-6-2'>

                            <div>
                                <img src='../images/Screenshot_20220427-093800-488.png' className='img6'></img>
                            </div>

                            <div>
                                <div >
                                    <p className="txt-8">“O site é perfeito! Super simples e prático, tanto para quem expõe, quanto para quem vem apenas observar!”</p>
                                </div>
                            </div>
                        </div>

                        <div className='sub-6-3'>

                            <div>
                                <img src='../images/Screenshot_20220427-095325-420.png' className='img6'></img>
                            </div>

                            <div>
                                <div >
                                    <p className="txt-8-1">“Com o ArtAttack minhas vendas aumentaram
                                        muito! Como posso deixar meu contato junto
                                        das minhas artes muitas pessoas entram
                                        em contato comigo!”</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </nav>

                <footer className='sub-7'>


                    <div className='sub-7-1'>
                        <p className="txt-9"> Art Attack Vem pro ataque!
                        </p>

                        <div className="img2">
                        <img src="../images/Logotipo.png" className="img2" />
                    </div>
                    </div>

                   

                    <div >

                        <p className='txt-9'>Art Attack</p>
                        <p className='txt-9'>artattack@gmail.com</p>
                        <p className='txt-9'>(11) 99999-9999</p>

                    </div>






                </footer>

            </main>

        </div>
    )
}