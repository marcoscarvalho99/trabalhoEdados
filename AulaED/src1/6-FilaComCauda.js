import fila from "../src/3-PilhaComFila";

class FilaComCauda {

    constructor(t = 10) {
        this.f = new fila(t);
    }

    inserirInicio(data) {
        if (this.f.isFull()) {
            throw new Error("Overflow");
        } else {
            let aux = new fila(this.f.tamanhoMaximo);

            while (this.f.size() != 0) {
                aux.enqueue(this.f.dequeue());
            }

            this.f.enqueue(data);

            while (aux.size() != 0) {
                this.f.enqueue(aux.dequeue());
            }


        }
        //return de teste
        return this.f.dequeue();
    }

    inserirFim(data) {
        this.f.enqueue(data);
    }

    removerInicio() {
        return this.f.dequeue();
    }

    removerFim() {
        if (this.f.isEmpty()) {
            throw new Error("Underflow");
        } else {
            let aux = new fila(this.f.tamanhoMaximo);

            while (this.f.size() != 0) {
                aux.enqueue(this.f.dequeue());
            }

            while (aux.size() != 1) {
                this.f.enqueue(aux.dequeue());
            }

            return aux.dequeue();

        }

    }
}

export default FilaComCauda;