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


export async function infoPerfil(idUsuario) {
    const resposta = await api.get(`/perfil/${idUsuario}`);
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