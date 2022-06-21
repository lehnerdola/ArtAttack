import axios from "axios";
const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function Logar(email, senha){
    const r = await api.post('http://localhost:5000/usuario/login',{
        email: email, 
        senha: senha
      })
      return r.data;
      }

      export function buscarImagem(imagem) {
        return `${api.getUri()}/${imagem}`;
    }      


export async function infoPerfil(id) {
    const resposta = await api.get(`/perfil/${id}`);
    return resposta.data; 
}

export async function todosPerfis( ) {
    const resposta = await api.get('/perfil');
    return resposta.data; 
}

export async function CadUsuario(nmperfil,email,senha, ocupacao, bio, ctt){
    const resposta = await api.post('/cadastro', {
            nmperfil: nmperfil, 
            email: email,
            senha: senha,
            ocupacao: ocupacao,
            bio: bio,
            ctt : ctt
    })
    return resposta.data;
}

export async function alterarPerfil(id, nome,ocupacao, bio, ctt){
    const resposta = await api.put(`/alterarperfil/${id}`, {
            nome:  nome, 
            ocupacao: ocupacao,
            bio: bio,
            ctt : ctt
            
    })
    return resposta.data;
}

export async function enviarimagem (id, imagem){
    const formData = new FormData();
    formData.append('img', imagem);
    
    const resposta = await api.put(`/perfil/${id}/img` , formData, {
        headers:{
            "Content-Type": "multipart/form-data" 
        },
    });
    return resposta.status;
}