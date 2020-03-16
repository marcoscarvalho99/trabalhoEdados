import Lista from "../src/Lista"



class Pessoa {
    constructor() {

        this.list = new Lista();
        this.listaNumeros = new Lista();
        this.listaPalavras = new Lista();

    }

    cadastrar(dado1, dado2) {

        let pessoa = new Object();
        if (isNaN(dado1) && !isNaN(dado2)) {

            pessoa.nome = dado1;
            pessoa.idade = dado2;

        }
        else {
            pessoa.nome = dado2;
            pessoa.idade = dado1;
        }


        this.list.add(pessoa);

        return this.listaNumeros;


    }
    //     return this.list.toString();
    // }


    // ordenarPalavras() {



    //     this.orde();


    //     return this.palavras;

    // }



    // ordenarNumeros() {

    //     this.orde();

    //     this.listaNumeros.add(this.numeros);
    //     return this.listaNumeros.toString();
    // }

    // orde() {
    //     let c = this.list.size();

    //     for (let i = 0; i < c; i++) {
    //         if (i % 2 != 0) {
    //             this.palavras[i] = this.list.removeBeginning();
    //             console.log(this.palavras[i]);
    //         } else {
    //             this.numeros[i] = this.list.removeBeginning()
    //         }
    //     }

    //     for (let i = 1; i < this.numeros.length; i++) {

    //         for (let j = 0; j < this.numeros.length; j++) {
    //             //compara e faz a troca se necessario.
    //             if (this.numeros[j] > this.numeros[j + 1]) {

    //                 let aux = this.numeros[j];
    //                 this.numeros[j] = this.numeros[j + 1];
    //                 this.numeros[j + 1] = aux;
    //             }

    //         }

    //     }


    // }


    // cadastrar(dado1, dado2) {
    //     if (isNaN(dado1) && !isNaN(dado2)) {
    //         this.nome = dado1;
    //         this.idade = dado2
    //     }
    //     else {
    //         this.nome = dado2;
    //         this.idade = dado1;
    //     }




    //         this.list.add(this);

    //     }

    //     tostring(obj) {
    //         return this.list;
    //         //this.nome + "-" + this.idade
    //     };

    // 
}
export default Pessoa;