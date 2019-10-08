import { carrinhoStore } from '../store/CarinhoStore'
import { Descontos } from '../Interfaces/Descontos'
import { observable, action } from 'mobx';



class DescontoStore {
    @observable valorReduzido: number
    @observable desc = [0.05, 0.1, 0.2, 0.25]

    @observable desconto = new Array<Descontos>()

    @action CalcDesc = () => {
        if (carrinhoStore.quantidadeTotal == 1){
            return this.valorReduzido = carrinhoStore.valorTotal
        }else if(carrinhoStore.quantidadeTotal == 2){
            return this.valorReduzido = carrinhoStore.valorTotal - carrinhoStore.valorTotal * this.desc[0]

        }else if (carrinhoStore.quantidadeTotal == 3){
            return this.valorReduzido = carrinhoStore.valorTotal - carrinhoStore.valorTotal * this.desc[1]

        }else if (carrinhoStore.quantidadeTotal == 4){
            return this.valorReduzido = carrinhoStore.valorTotal - carrinhoStore.valorTotal * this.desc[2]

        }
        else if (carrinhoStore.quantidadeTotal >= 5){
            return this.valorReduzido = carrinhoStore.valorTotal - carrinhoStore.valorTotal * this.desc[3]

        }else return carrinhoStore.valorTotal
        
    }

}

export const descontoStore = new DescontoStore();