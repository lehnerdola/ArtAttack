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


export async function infoPerfil() {
    const resposta = await api.get('/perfil');
    return resposta.data; 
}

export async function CadUsuario(nomeperfil,email,senha, ocupacao, bio, ctt){
    const resposta = await api.post('/usuario/cadastro', {
            nomeperfil: nomeperfil, 
            email: email,
            senha: senha,
            ocupacao: ocupacao,
            bio: bio,
            ctt : ctt
    })
    return resposta.data;
}

export async function alterarPerfil(id, nomeperfil,ocupacao, bio, ctt){
    const resposta = await api.put(`/alterarperfil/${id}`, {
            nomeperfil:  nomeperfil, 
            ocupacao: ocupacao,
            bio: bio,
            ctt : ctt
            
    })
    return resposta.data;
}