class filacircular {

    constructor(t = 10) {
        this.tamanho = t;
        this.dados = [];
        this.fim = -1;
        this.inicio = -1;
    }

    isEmpty() { //verifica se a lista está vazia 
        return (this.inicio === -1); //se a lista for igual a -1 é porque está vazia
    }
    enqueue(newData) { //adicion um daado na lista 
        if (this.isFull()) {
            throw new Error("impossivel está cheio");
        };
        if (this.isEmpty()) {
            this.inicio = this.fim = 0;
        }
        else {
            this.fim = this.getNextEndPosition();
        }

        this.dados[this.fim] = newData;

    }
    clear() {
        this.dados = [];

    }
    size() {

        if (this.isEmpty()) {
            return 0;
        }
        else if (this.inicio === this.fim) {
            return this.fim - this.inicio - 1;
        } else {
            return this.tamanho - this.inicio + this.fim + 1;
        }

    }

    dequeue() {// retira um dado da lista 

        if (this.isEmpty) {
            return false;
        }
        this.inicio++;
        return;
    }

    isFull() {//verifica se a lista está cheia 
        return (this.inicio === 0 && this.fim === this.tamanho - 1) || // verifica se toda a lista está preenchida dando o seu retorno.
            (this.fim === (this.inicio - 1) % (this.tamanho - 1));
    }
    getNextEndPosition() { //passa uma possição na lista 
        return (this.fim === this.tamanho - 1) && (this.inicio !== 0) ? 0 : this.fim + 1;
    }
    getNextBeginPosition() { // retorna uma posição na lista
        return (this.inicio === this.tamanho - 1) ? 0 : this.inicio + 1;

    }
}

export default filacircular;