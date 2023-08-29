const carros = require('../bancoDeDados')
const validarDados = (dados) => {

}
const cadastrarCarro = (req, res) => {
    const {marca, modelo, ano, preco, transmissao,combustivel, consumo_cidade, consumo_estrada, potencia_motor, capacidade_porta_malas} = req.body
    
    if (!marca || !modelo || !ano || !preco || !transmissao || !combustivel || !consumo_cidade || !consumo_estrada || !potencia_motor || !capacidade_porta_malas) {
        return res.status(400).json({ mensagem: "Está faltando dados obrigatórios!" });
    }
    const carroJaCadastrado = carros.find(carro => carro.modelo === modelo && carro.ano === ano);
    if (carroJaCadastrado) {
        return res.status(400).json({ mensagem: 'Este carro já está cadastrado.' });
    }
    const novoCarro = {
        marca,
        modelo,
        ano,
        preco,
        transmissao,
        combustivel,
        consumo_cidade,
        consumo_estrada,
        potencia_motor,
        capacidade_porta_malas
    }

    carros.push(novoCarro)
    return res.status(200).json({mensagem: "Carro cadastrado com sucesso!"})
}



const compararCarros = (req, res) => {
    const { carro1, carro2 } = req.body;

    const carro1Info = carros.find(carro => carro.marca === carro1.marca && carro.modelo === carro1.modelo && carro.ano === parseInt(carro1.ano));
    const carro2Info = carros.find(carro => carro.marca === carro2.marca && carro.modelo === carro2.modelo && carro.ano === parseInt(carro2.ano));

    if (!carro1Info || !carro2Info) {
        return res.status(404).json({ mensagem: 'Um ou ambos os carros não encontrados.' });
    }

    let pontosCarro1 = 0;
    let pontosCarro2 = 0;

    if (carro1Info.preco < carro2Info.preco) pontosCarro1++;
    if (carro1Info.transmissao === 'automatica') pontosCarro1++;
    if (carro1Info.consumo_cidade > carro2Info.consumo_cidade) pontosCarro1++;
    if (carro1Info.potencia_motor > carro2Info.potencia_motor) pontosCarro1++;
    if (carro1Info.capacidade_porta_malas > carro2Info.capacidade_porta_malas) pontosCarro1++;

    pontosCarro2 = 5 - pontosCarro1;

    const melhorCarro = pontosCarro1 > pontosCarro2 ? carro1Info : carro2Info;

    return res.status(200).json({
        mensagem: 'Comparação de Carros',
        carro1: carro1Info,
        carro2: carro2Info,
        melhorCarro: melhorCarro
    });
};






module.exports = {cadastrarCarro, compararCarros}