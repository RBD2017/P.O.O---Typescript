//Descreva um programa para utilização do elevador 

console.log('apartemento de Moscow City - Rússia');

class elevador {
    numero_andar: number
    horario: number
    constructor(numero_andar: number, horario: number) {
        this.numero_andar = numero_andar
        this.horario = horario
        
    }

   

    verificar(){
        if (this.numero_andar <= 10 ) {
            console.log('o elevador só pode ir até aqui');
            
        } else {
            console.log('espere o proximo elevador');
            
        }

        
        setTimeout(() => {
            console.log('o elevador levará alguns segundos aguarde');
            
        }, 8000);
    }

    
    horarios(horario: number){
        return console.log(horario);
            
    }
    verificar_horario(){
        if (this.horario == 10) {
            console.log('estar okay');
            
        } else {
            console.log('estar atrasado');
            
        }
    }
}

const russia = new elevador(15,10)
russia.verificar()
russia.horarios(10)
russia.verificar_horario()