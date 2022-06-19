import axios, { AxiosResponse } from 'axios';

const LogisticaService = axios.create({
    baseURL: "http://192.168.100.26:8000/logistica"
});

export function CadastrarMedicamento(nomeMedicamento:string, descricaoMedicamento?:string):Promise<AxiosResponse>{
    const pacote:object = {
        nomeMedicamento,
        descricaoMedicamento
    };

    return LogisticaService.post('/cadastro', pacote);
}

export function ConsultaMedicamento(nome?:string):Promise<AxiosResponse>{
    return LogisticaService.get('/consulta' + `?${nome? 'nome=' + nome : ''}`);
}