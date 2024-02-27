/*
[Object]

Pode ser qualquer coisa. Tudo em JavaScript é um objeto e pode ser armazenado em uma variável. Tenha isso em mente enquanto aprende.   
 
Os objetos são estruturas de dados complexas que podem conter várias propriedades e métodos. Eles são fundamentais em JavaScript
*/
const carro = {
  modelo: "BMW",
  ano: 2022,
  estado: {
    cidade: "BH",
    municipio: "MG",
  },
  nacionalidade: "BRL",
  ipvaPago: false,
  dataDeFabricacao: new Date("2022-02-20"),
  donos: [
    {
      nome: "Giselida",
      anoVigenciaInicio: 2022,
      anoVigenciaFim: 2023,
    },
    {
      nome: "Joao",
      anoVigenciaInicio: 2023,
      anoVigenciaFim: 2024,
    },
    {
      nome: "Gustavo",
      anoVigenciaInicio: 2024,
      anoVigenciaFim: 2025,
    },
  ],
  acelerar(velocidade = 0) {
    const lastOwner = this.donos[this.donos.length - 1];
    return `${lastOwner.nome} acelerou o ${this.modelo}!!! e chegou a ${velocidade}km `;
  },
};
console.log(carro.acelerar()); //Gustavo acelerou o BMW!!! e chegou a 0km
console.log(carro.modelo); //BMW
carro.modelo = "Porsche";
console.log(carro.modelo); //Porsche
console.log(carro.acelerar(500)); //Gustavo acelerou o Porsche!!! e chegou a 500km