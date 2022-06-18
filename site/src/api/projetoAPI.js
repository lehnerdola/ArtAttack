import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:5000'
})


export async function todosProjetos( ) {
    const resposta = await api.get('/projeto');
    return resposta.data; 
}


export async function buscarProjetoPorNome(nome) {
    const resposta = await api.get(`/projeto/busca?nome=${nome}`);
    return resposta.data; 
}

export async function CriarProjeto(nome, descricao, categoria, materiais, usuario){
    const r = await api.post('/projeto',{
     usuario: usuario,
     nome: nome,
     descricao: descricao,
     categoria:categoria,
     materiais: materiais
    })

    return r.data;
} 

export async function AdicionarImagem(imagem,id){
    const formData = new FormData();
    formData.append('img', imagem);

    const resposta = await api.put(`/projeto/${id}/img`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        },
    });
    return resposta.status;
}