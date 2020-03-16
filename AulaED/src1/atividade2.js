class atividade2 {


    // @param { Number } [tamanho = 10];

    constructor(tamanho) {
        this.tamanho = tamanho;
        this.dados = [];
        this.topo = -1;
    }




    push(num) {
        if (this.topo + 1 == this.tamanho) {
            return false;
        }
        this.topo = this.topo + 1;
        this.dados[this.topo] = num;

        return this.dados[this.topo];
    }
    pop() {
        if (this.topo == -1) {
            throw new Error("erro no pop");
        }
        else {

            return this.dados[this.topo--];
        }
    }


    top() {
        if (this.isEmpty()) {
            throw new Error("Empty-vazio");
        } else {
            return this.dados[this.topo];
        }
    }

    base() {
        if (this.isEmpty()) {
            throw new Error("Empty");
        } else {
            return this.dados[0];
        }
    }

    /**
     * Remove todos os elementos da Pilha.
     */
    clear() {
        this.topo = -1;
    }

    /**
     * Retorna o tamanho da Pilha.
     * @returns {number} - Tamanho da Pilha.
     */
    size() {
        return this.topo + 1;
    }

    /**
     * Verifica que uma Pilha é vazia.
     * @returns {boolean} - Retorna [true] se a Pilha estiver vazia, [false] caso contrário.
     */
    isEmpty() {
        return this.size() === 0;
    }

    /**
     * Verifica que uma Pilha é cheia.
     * @returns {boolean} - Retorna [true] se a Pilha estiver cheia, [false] caso contrário.
     */
    isFull() {
        return this.size() === this.maxSize;
    }

    /**
     * Retorna uma string contendo todos os elementos da Pilha.
     * @returns {string} - Conteúdo da Pilha formatado.
     */
    print() {
        let result = "[";
        for (let i = 0; i <= this.topo; i++) {
            result += ` ${this.dados[i]} `;
        }
        result += "]";
        return result;
    }
    print3() {
        let result = "[";
        for (let i = 0; i <= this.topo; i++) {
            result += ` ${this.dados3[i]} `;
        }
        result += "]";
        return result;
    }

    conv(obj) {

        obj.dados.forEach(function (element, index) {

            if (index == 0) {
                obj.dados3.push(element);

            }
            else if (index < obj.tamanho) {

                obj.dados2.push(element);

            } else {
                obj.dados3.push(element);

            }


        });
        this.print3();
    }



}

export default atividade2;