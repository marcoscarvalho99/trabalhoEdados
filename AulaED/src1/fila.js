class fila {


    constructor(t) {
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




}
export default fila;
