import './index.scss';
import Modal from "react-modal";

import { Link } from 'react-router-dom';

import storage from 'local-storage'
import { useNavigate } from 'react-router-dom';

import { buscarProjetoPorNome, todosProjetos } from '../../api/projetoAPI.js'
import { useEffect, useState } from 'react';

Modal.setAppElement("#root");




export default function Feed() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [projetos, setProjetos] = useState([])

    async function carregarTodosProjetos() {
		const resp = await todosProjetos();
		setProjetos(resp);
	}

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
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
		setTimeout(() => {
			carregarTodosProjetos();
		}, 5000)
	}, []);

    return (

        <div className='ma'>

            <header className='container1'>

                <Link to="../perfil">
                    <img src='./images/Screenshot_20220502-223132-694.png' className='imgperfil' />
                </Link>
                <div className='bo1'>
                    <button className='b1-txt' onClick={sairClick}> Sair </button>
                </div>
            </header>

            <nav className='container2'>

                <div>
                    <h2 className='txt1'>O MELHOR DO ART ATTACK</h2>
                    <h3 className='txt1'>CURADORIA DO ART ATTACK</h3>
                </div>

                <div>
                    <input type='search' placeholder='Pesquisar todos os projetos' className='busca'></input>
                </div>
            </nav>

            <main className='container4'>


                {projetos.map (item =>
                <div className='sub1'>

<div className='sub-1-4'>

<img src='./images/64572.png' className='imgusuario'>
</img>
<p className='txt2'>usuario1</p>

</div>
                    <div className='sub-1-2'>
                        <div className='subsla'>
                            <img src={`http://localhost:5000/${item.imagem}`} className='img0' />
                            
                            <p> {item.nome.substr(0, 18)}</p>
                            <p>{item.descricao}</p>
                            <p>{item.categoria}</p>
                        </div>


                           

                    </div>

                </div>
)}
            </main>

        </div>

    )

}