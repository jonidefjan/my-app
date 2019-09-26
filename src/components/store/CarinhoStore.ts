import { action, observable, computed } from 'mobx';
import { livros } from '../livrosData'
import { persist } from 'mobx-persist';



class CarrinhoStore {

    @persist @observable quantidadeTotal=0;
    
    @persist @observable precoTotal:number;
    @observable livrosId = new Array()
    @observable livrosTitle = new Array()
    @observable livrosAutor = new Array()
    @observable livrosPreco = new Array()
    @observable livrosCapa = new Array()
    @observable livrosDescription = new Array()
    @observable livrosQuantidade = new Array()

    @observable reducer = (accumulator:number, currentValue:number) => accumulator + currentValue;
    
    quantidadeId = livros.map(livro =>{
        this.livrosId.push(livro.id)
        this.livrosTitle.push(livro.titulo)
        this.livrosAutor.push(livro.autor)
        this.livrosPreco.push(livro.preco)
        this.livrosCapa.push(livro.capa)
        this.livrosDescription.push(livro.description)
        this.livrosQuantidade.push(livro.quantidade)
    })

    @observable qnt = this.livrosQuantidade.reduce(this.reducer)
    @observable price = this.livrosPreco.reduce(this.reducer)

    

    @action increase = () => {
        this.quantidadeTotal++;
    };

    @action decline = () => {
        this.quantidadeTotal--;
        if (this.quantidadeTotal < 0) {
            this.quantidadeTotal = 0;
            
        }else{
            this.quantidadeTotal
        }
        
    };

    @computed get total(){
        
        return 
    }

}

export const carrinhoStore = new CarrinhoStore();
