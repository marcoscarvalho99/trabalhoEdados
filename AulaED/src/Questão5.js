import Lista from "../src/Lista";


class Embaralhar {

    constructor() {
        this.list = new Lista();
        this.aux = new Lista();
        this.cont = 0;
    }

    add(num) {
        if (this.cont % 2 == 0) {
            this.list.add(num);
            this.cont++;

        } else if (this.cont % 2 != 0) {
            this.list.append(num);
            this.cont++;
        }

    }

    Embaralhar() {
        let i = 0;
        let aux = [];
        while (this.list.size() > 0) {
            //let pos = Math.floor((Math.random() * this.list.size()) + 1);
            aux[i] = this.list.removeBeginning();
            i++;
        }
        for (let i = 0; i < aux.length; i++) {
            let pos = Math.floor((Math.random() * this.list.size()) + 1);
            this.list.addAt(pos, aux[i]);
        }

        return this.list.toString();
    }


    // embaralhar() {


    //     let cont = 0;
    //     while (this.list.size() > 0) {
    //         let pos = Math.floor((Math.random() * this.list.size()) + 1);
    //         this.aux.addAt(pos, this.list.removeBeginning());
    //     }

    //     while (this.aux.size() > 0) {
    //         this.list.add(this.aux.removeBeginning());

    //     }

    //     return this.list.toString();

    // }



}

export default Embaralhar;
