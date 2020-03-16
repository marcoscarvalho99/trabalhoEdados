class fila {


    constructor(t = 10) {
        this.dados = [];
        this.inicio = 0;
        this.fim = 0;
        this.tamanhoMaximo = t;
    }

    enqueue(newData) {
        if (this.isFull()) {
            throw new Error("Overflow");

        } else {
            this.dados[this.fim++] = newData;
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Underflow");
        } else {
            return this.dados[this.inicio++];
        }

    }


    front() {
        if (this.isEmpty()) {
            throw new Error("Underflow");
        } else {
            return this.dados[this.inicio];
        }
    }

    size() {
        return this.fim - this.inicio;
    }

    isEmpty() {
        return this.fim === this.inicio;

    }

    isFull() {

        return this.size() === this.tamanhoMaximo;
    }

    pilhaFila() {
        if (this.isEmpty()) {
            throw new Error("Underflow");
        } else {
            let aux = new fila();

            while (this.size() != 1) {
                aux.enqueue(this.dequeue());
            }

            while (aux.size() != 0) {
                this.enqueue(aux.dequeue());
            }


        }

    }



}
export default fila;
