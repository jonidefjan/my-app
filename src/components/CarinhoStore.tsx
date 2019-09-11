import { action, observable } from 'mobx';



class CarrinhoStore {

    @observable quantidadeTotal=0;
    @observable precoTotal:number;
    @observable livroId:string
    


    @action increase = (livroId:any) => {
        {console.log()}
        this.quantidadeTotal++;
        console.log(this.quantidadeTotal)
    };

    @action decline = (livroId:any) => {
        {console.log(livroId)}
        this.quantidadeTotal--;
        if (this.quantidadeTotal < 0) {
            this.quantidadeTotal = 0;
        }else{
            this.quantidadeTotal
        }
        
    };

}

export const carrinhoStore = new CarrinhoStore();
