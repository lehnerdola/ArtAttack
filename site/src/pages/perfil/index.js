import './index.scss';
import { Link, useNavigate } from 'react-router-dom';
import storage from 'local-storage'

import { infoPerfil } from '../../api/usuarioAPI.js'
import { listarMeusProjetos, removerProjeto } from '../../api/projetoAPI';
import { useState, useEffect } from 'react';
import { confirmAlert } from "react-confirm-alert";
import { toast } from 'react-toastify';
import Modal from 'react-modal';

export default function Perfil() {

    const id = storage('usuario-logado').id
    const [perfil, setPerfil] = useState([]);
    const [projeto, setProjeto] = useState([]);
    const navigate = useNavigate();

    function editarProjeto(id){
        navigate(`/alterar/${id}`)
  }


    async function deletarProjeto(id, nome) {
		confirmAlert({
			title: "Remover projeto",
			message: `Deseja remover o projeto ${nome}` ,
			buttons: [
				{
					label: "Sim",
					onClick: async () => {
						const resposta = await removerProjeto(id, nome);
						listarProjetos();
						toast.success("🔥 Projeto " + nome + " removido!");
					},
				},
				{
					label: "Não",
				},
			],
		});
	}


    async function perfilUsuarioInfo() {
        const resp = await infoPerfil(id);
        console.log(resp);
        setPerfil(resp)
    }

    async function listarProjetos() {
		const resposta = await listarMeusProjetos(id);
		setProjeto(resposta);
	}

    useEffect(() => {
		listarProjetos();
	}, []);

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
                        <img src= {`http://localhost:5000/${item.imagem_usuario}`} className='imgusu' />
                        <p className='txt-perfil'>@{item.nome}</p>
                        <p className='txt-perfil2'>{item.ocupacao}</p>
                        <p className='txt-perfil2'>{item.bio}</p>
                        <p className='txt-perfil2'>{item.ctt}</p>
                        <Link to="../editarperfil">
                            <a className='b-5'>
                                <p className='txt2'>Editar perfil</p>
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



            
                {projeto.map(item =>    
                <div className='s3'>
                    <hr className='hrtop'/>

                    <img src={`http://localhost:5000/${item.imagem}`} className="imagem" /> 
                                        <p className='txt2'>Título:{item.nome}</p>
                                        <p className='txt2'>Descrição: {item.descricao}</p>
                                        <p className='txt2'>Categoria: {item.categoria}</p>
                                        <p className='txt2'>Materiais: {item.materiais}</p>
                    <button className='b-3-2' onClick={() => deletarProjeto(item.id, item.nome)}>Remover</button>
                    <button className='b-3-1' onClick={() => editarProjeto(item.id)  }>Alterar</button>


                </div>
)}
            </aside>

        </div>

    )

}