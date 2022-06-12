import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:5000'
})


export async function infoPerfil( ) {
    const resposta = await api.get('/perfil');
    return resposta.data; 
}
