import { action, observable } from 'mobx';

class CarrinhoStore {

    @observable counter= 0;

    @action increase = () => {
        this.counter++;
    };

    @action decline = () => {
        this.counter--;
        if (this.counter < 0) {
            this.counter = 0;
        }else{
            this.counter
        }
        
    };

}

export const carrinhoStore = new CarrinhoStore();
