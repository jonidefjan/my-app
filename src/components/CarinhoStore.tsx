import { action, observable } from 'mobx';

class CarrinhoStore {

    @observable quantidadeTotal=0;

    @action increase = () => {
        this.quantidadeTotal++;
        console.log(this.quantidadeTotal)
    };

    @action decline = () => {
        this.quantidadeTotal--;
        if (this.quantidadeTotal < 0) {
            this.quantidadeTotal = 0;
        }else{
            this.quantidadeTotal
        }
        
    };

}

export const carrinhoStore = new CarrinhoStore();
