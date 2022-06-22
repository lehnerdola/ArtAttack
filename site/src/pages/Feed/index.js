import './index.scss';
import Modal from "react-modal";

import { Link } from 'react-router-dom';

import storage from 'local-storage'
import { useNavigate } from 'react-router-dom';

import {buscarProjetoPorNome, todosProjetos } from '../../api/projetoAPI.js'
import {todosPerfis, infoPerfil } from '../../api/usuarioAPI';
import { useEffect, useState } from 'react';



export default function Feed() {
    const [projetos, setProjetos] = useState([]);
    const [perfil, setPerfil] = useState([]);
    const [filtro, setFiltro] = useState("");
    const id = storage('usuario-logado').id
    const userLogado = storage('usuario-logado').nome

    async function Filtrar() {
        const resp = await buscarProjetoPorNome(filtro);
        setProjetos(resp);
    }


    async function carregarTodosProjetos() {
        const resp = await todosProjetos();
        console.log(resp);
        setProjetos(resp);
    }

    async function perfilUsuarioInfo() {
        const resp = await todosPerfis();
        setPerfil(resp)
    }

    async function perfilUsuarioInfoId() {
        const resp = await infoPerfil(id);
        setPerfil(resp)
    }

    function sairClick() {
        storage.remove('usuario-logado');
        navigate('/login')
    }

    const navigate = useNavigate();

    useEffect(() => {
        if (!storage('usuario-logado')) {
            navigate('/login')
        }

    }, [])

    useEffect(() => {
        Filtrar();
    }, [filtro]);


    useEffect(() => {
        setTimeout(() => {
            carregarTodosProjetos();
        })
    }, []);

    useEffect(() => {
        perfilUsuarioInfo();
    }, [])

    useEffect(() => {
        perfilUsuarioInfoId();
    }, [])

    return (

        <div className='ma'>

            {perfil.map (item =>
            <header className='container1'>
                <div className='subsla4'>
                    <Link to="../perfil">
                        <img src={`http://localhost:5000/${item.imagem_usuario}`} className='imgperfil' />
                    </Link>
                    <p className='txt2'>@{userLogado}</p>

                </div>
                <div className='bo1'>
                    <button className='b1-txt' onClick={sairClick}> Sair </button>
                </div>
            </header>
)}
            <nav className='container2'>

                <div className='sub-1-1'>
                    <h2 className='txt1'>O MELHOR DO ART ATTACK</h2>
                    <h3 className='txt1'>CURADORIA DO ART ATTACK</h3>

                <div>
                    <input  placeholder='Pesquisar todos os projetos' className='busca' Value={filtro} onChange={(e) => setFiltro(e.target.value)}></input>
                    <img src='./images/image_preview-removebg-preview.png' className='lupa' onClick={Filtrar}/>
                </div>
                </div>

            </nav>

            <main className='container4'>


                {projetos.map(item =>
                    <div className='sub11'>

                        <div className='subsla3'>

                            <div className='subsla2'>
                                <img src={`http://localhost:5000/${item.imagem_usuario}`} className='imgusuario' /> 
                                
                                <p className='txtusuario'>@{item.usuario}</p>
                            </div>
                            <p className='txt2-1' >{item.nome}</p>

                            <div key={item.id}>
                                <div className='subsla'>
                                    <img src={`http://localhost:5000/${item.imagem}`} className='img0' />

                                    <p className='txt2'>Descrição:{item.descricao}</p>
                                    <p className='txt2'>Categoria:{item.categoria}</p>
                                    <p className='txt2'>Materiais:{item.materiais}</p>

                                </div>

                            </div>



                        </div>

                        <hr />
                    </div>
                )}
            </main>

        </div>

    )

}