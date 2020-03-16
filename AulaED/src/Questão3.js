class Arranjo {

    constructor() {

        this.lista = [];
        this.cont = 0;

    }

    addfinal(dado) {

        this.lista[this.cont++] = dado;
        return this.lista[0];
    }

    addinit(dado) {
        let c = this.size();
        let aux = [];

        for (let i = 0; i < c; i++) {
            aux[i] = this.lista[i];
        }

        this.lista = [];
        c = aux.length;

        this.lista[0] = dado;
        for (let i = 1; i < c + 1; i++) {
            this.lista[i] = aux[i - 1]
        }
        return this.lista;
    }

    addlocal(indice, dado) {
        indice = indice - 1;
        let aux = [];


        if (indice === 0 || indice < 0) {
            this.addinit(dado);
        }
        else if (indice === this.lista.length - 1 || indice > this.lista.length - 1) {
            this.addfinal(dado);
        }
        else {


            let c = this.lista.length;

            for (let i = 0; i < c; i++) {
                aux[i] = this.lista[i];
            }
            this.lista = [];

            for (let i = 0; i < indice; i++) {
                this.lista[i] = aux[i];
            }
            this.lista[indice] = dado;

            for (let i = ++indice; i <= c; i++) {
                this.lista[i] = aux[i - 1];
            }
        }
        return this.lista;
    }

    removeFinal() {
        if (this.isEmpty()) {
            throw new Error("A lista está vazia.");
        } else {


            let aux = [];
            let c = this.lista.length;
            for (let i = 0; i < c - 1; i++) {
                aux[i] = this.lista[i];
            }
            this.lista = [];

            c = aux.length;
            for (let i = 0; i < c; i++) {
                this.lista[i] = aux[i];

            }
        }
    }

    removeInicio() {
        if (this.isEmpty()) {
            throw new Error("A lista está vazia.");
        } else {
            let aux = [];
            let c = this.lista.length;
            for (let i = 1; i < c; i++) {
                aux[i - 1] = this.lista[i];
            }
            this.lista = [];
            c = aux.length;
            for (let i = 0; i < c; i++) {
                this.lista[i] = aux[i];
            }
        }
    }


    removeLocal(indice) {
        indice = indice - 1;
        if (this.isEmpty()) {
            throw new Error("A lista está vazia.");
        } else if (indice == 0) {
            this.removeInicio();
        } else if (indice == this.lista.length) {
            this.removeFinal();
        } else {

            let aux = [];
            let c = this.lista.length;
            for (let i = 0; i < indice; i++) {
                aux[i] = this.lista[i];
            }

            for (let i = indice + 1; i < c; i++) {
                aux[i - 1] = this.lista[i];
            }
            this.lista = [];
            c = aux.length;
            for (let i = 0; i < c; i++) {
                this.lista[i] = aux[i];

            }
        }
        return this.lista;
    }
    isEmpty() {
        return this.lista.length === 0;
    }

    seach(dado) {

        if (this.isEmpty()) {
            return false;
        }
        else {
            for (let i = 0; i < this.size(); i++) {

                if (dado === this.lista[i]) {
                    return true;
                }

            }
        }
        return false;

    }

    size() {
        return this.lista.length;
    }

    toString() {
        let to = "";

        for (let i = 0; i < this.size(); i++) {
            to += this.lista[i] + ",";
        }

        return to;
    }


} export default Arranjo;