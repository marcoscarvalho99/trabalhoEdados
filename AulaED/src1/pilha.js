export default class pilha {

    @param { Number } [tamanho = 10];

constructor(tamanho = 10) {
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
        return false;
    }

    this.topo--;
    return this.dados[this.topo];

}
size() {
    let m = this.topo;
    return m;
}
tam() {
    return this.dados.length;
}
top() {


}
}