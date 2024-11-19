


console.log('Moscow City');

class elevador_novo {
    numero_elevador: number
    apartamento: number
    constructor(numero_elevador: number, apartamento: number) {
        this.numero_elevador = numero_elevador
        this.apartamento = apartamento
        
    }

    condicional(){
        if(this.numero_elevador >= 1 && this.apartamento <=15){
            console.log('vc estar no primeiro terreo');
            
        }
        else{
            console.log('vc estar no segundo terreo');
            
        }
    }
}

const elevadores = new elevador_novo(1000,25)
console.log(elevadores);
elevadores.condicional()
