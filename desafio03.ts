console.log('supermercado duas barras');

class SupermercadoDuasBarras {
    endereco: string;
    constructor(endereco: string) {
        this.endereco = endereco;
    }
}

class Mercadoria {
    endereco: SupermercadoDuasBarras; // Corrigido de 'enderecos' para 'endereco'
    produto: string; // Corrigido de 'produtos' para 'produto'
    valor: number;
    dataValidade: number; // Corrigido de 'data_validade' para 'dataValidade'
    constructor(endereco: SupermercadoDuasBarras, produto: string, valor: number, dataValidade: number) {
        this.endereco = endereco;
        this.produto = produto;
        this.valor = valor;
        this.dataValidade = dataValidade;
    }
}

const SUPERMERCADO = new SupermercadoDuasBarras('rua São Jorge');
const MERCADORIA1 = new Mercadoria(SUPERMERCADO, 'detergente', 2, 10);
const MERCADORIA2 = new Mercadoria(SUPERMERCADO, 'macarrão', 7, 15);

console.log(MERCADORIA1);
console.log(MERCADORIA2);
