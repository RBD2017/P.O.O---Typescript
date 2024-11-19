console.log('BANCO DE DADOS');

class Data_base {
    sql: string
    postegrels: string


    constructor(sql: string,postegrels: string) {
        this.sql = sql
        this.postegrels = postegrels
        
    }
}

class Insere_base extends Data_base{
    insere: string

    constructor(sql: string, postegrels: string,insere: string) {
        super(sql,postegrels)
        this.insere = insere
    }
}

const db = new Insere_base('Postegre','Versão 2.0','10|09|2014')

console.log(db)

class User {
    usuario: string
    id: number

    constructor(usuario: string, id: number) {
        this.usuario = usuario
        this.id = id
    }

    verificar_status(){
        if (this.id <= 10) {
            console.log('usuario okay');
            
        }
        else{
            return console.log(this.id + 10)
            
        }
    }
}

const usuarios = new User('Kennedy',15);

console.log(usuarios);
usuarios.verificar_status();
