import fila from "./3-PilhaComFila";


class Atendimento {

    constructor(t = 10) {

        this.fila = new fila(t);

    }

    add(data) {
        this.fila.enqueue(data);
    }


    twofila() {

        let aux = new fila();
        if (this.fila.isEmpty()) {
            throw new Error("fila principal vazia");
        }
        else {
            while (this.fila.size() > 0) {

                if (this.fila.size() > 2 && aux.size() < 4) {
                    aux.enqueue(this.fila.dequeue());
                    aux.enqueue(this.fila.dequeue());
                    aux.enqueue(this.fila.dequeue());

                }
                if (this.fila.size() == 2 && aux.size() < 3) {
                    aux.enqueue(this.fila.dequeue());
                    aux.enqueue(this.fila.dequeue());
                }
                if (this.fila.size() == 1 && aux.size() < 3) {
                    aux.enqueue(this.fila.dequeue());
                }

                if (aux > 0) {
                    console.log(aux);
                    aux.dequeue();
                }

            }

        }


        return this.fila.size();



    }


}

export default Atendimento;