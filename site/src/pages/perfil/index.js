import './index.scss';
import { Link, useNavigate } from 'react-router-dom';
import storage from 'local-storage'

import { infoPerfil } from '../../api/usuarioAPI.js'
import { listarMeusProjetos, removerProjeto } from '../../api/projetoAPI';
import { useState, useEffect } from 'react';
import { confirmAlert } from "react-confirm-alert";
import { toast } from 'react-toastify';
import Modal from 'react-modal';
Modal.setAppElement("#root");



export default function Perfil() {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const idUsuario = storage('usuario-logado').id
    const [perfil, setPerfil] = useState([]);
    const [projeto, setProjeto] = useState([]);
    const navigate = useNavigate();

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
        const resp = await infoPerfil(idUsuario);
        setPerfil(resp)
    }

    async function listarProjetos() {
		const resposta = await listarMeusProjetos(idUsuario);
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
                        <img src="./images/Screenshot_20220502-223132-694.png" className='imgusu' />
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
                <div class="s3">
                    <img src={`http://localhost:5000/${item.imagem}`} className="imagem" />
                    <img src='./images/Gold-Star-PNG-Transparent-Image.png' className='star' onClick={openModal} />
                                    <Modal
                                        isOpen={modalIsOpen}
                                        onRequestClose={closeModal}
                                        contentLabel="Example Modal"
                                        overlayClassName="modal-overlay"
                                        className="modal-content"
                                    >
                                        <p>Título:{item.nome}</p>
                                        <p>Descrição: {item.descricao}</p>
                                        <p>Categoria: {item.categoria}</p>
                                        <p>Materiais: {item.materiais}</p>
                                    <button onClick={closeModal}>fechar</button>  
                                    </Modal>
                    <button onClick={() => deletarProjeto(item.id, item.nome)}>Remover</button>

                </div>
)}
            </aside>

        </div>

    )

}