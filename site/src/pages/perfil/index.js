import './index.scss';
import { Link } from 'react-router-dom';

import { infoPerfil } from '../../api/usuarioAPI.js'
import { useState, useEffect } from 'react';

export default function Perfil() {

    const [perfil, setPerfil] = useState([]);

    async function perfilUsuarioInfo() {
        const resp = await infoPerfil();
        console.log(resp);
        setPerfil(resp)
    }

    useEffect(() => {
        perfilUsuarioInfo();
    }, [])


    return (

        <div className='ma2'>

            <div className='ca1'>
                <div class="b-1">
                    <Link to="../Feed">
                        <a >
                            <p className="b-1-txt">Voltar</p>
                        </a>
                    </Link>
                </div>
            </div>

            <nav class="c1">


                {perfil.map(item =>
                    <div class="s1">
                        <img src="./images/Screenshot_20220502-223132-694.png" className='imgusu' />
                        <p className='txt-perfil'>@{item.nome}</p>
                        <p className='txt-perfil2'>{item.ocupacao}</p>
                        <p className='txt-perfil2'>{item.bio}</p>
                        <p className='txt-perfil2'>{item.ctt}</p>
                        <Link to="../editarperfil">
                            <a className='b-5'>
                                <p className='txt2'>Editar perfil    </p>
                            </a>
                        </Link>
                    </div>

                )}



                <div class="s2">
                    <a className='b-4' >PROJETOS</a>
                    <Link to="../criarprojeto">
                        <a class='b-22'>CRIAR PROJETO</a>
                    </Link>
                </div>
            </nav>

            <aside class="c2">



                <div class="s3">
                    <img src="./images/Screenshot_20220501-111439-460.png" class="imagem" />
                    <input type="button" value="Remover" class="b-3" />
                </div>

                <div class="s3">
                    <img src="./images/Screenshot_20220502-225108.png" class="imagem" />
                    <input type="button" value="Remover" class="b-3" />
                </div>

            </aside>

        </div>

    )

}