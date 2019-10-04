import { action, observable, computed } from 'mobx';
import { livros } from '../livrosData'
import { persist } from 'mobx-persist';



class CarrinhoStore {

    @persist @observable quantidadeTotal=0;
    @persist @observable quantidadeParcial=0;

    @persist @observable added=false;

    @persist @observable precoTotal:number;
    @persist @observable livrosId = new Array()
    @persist @observable itensCart = new Array()
    @observable livrosAutor = new Array()
    @observable livrosPreco = new Array()
    @observable livrosCapa = new Array()
    @observable livrosDescription = new Array()
    @observable livrosQuantidade = new Array()

    @observable reducer = (accumulator:number, currentValue:number) => accumulator + currentValue;
    
    quantidadeId = livros.map(livro =>{
        this.livrosAutor.push(livro.autor)
        this.livrosPreco.push(livro.preco)
        this.livrosCapa.push(livro.capa)
        this.livrosDescription.push(livro.description)
        this.livrosQuantidade.push(livro.quantidade)
    })

    @computed get quantidadeLivro(){

        return
    }

    @observable qnt = this.livrosQuantidade.reduce(this.reducer)
    @observable price = this.livrosPreco.reduce(this.reducer)

    

    @action increase = (idLivro:any) => {
        const livro = livros.find(book => book.id === idLivro)
        
        if (!this.added && livro!.id) {      
            this.livrosId.push(livro)
            this.added = true
        }else{
            this.added = false
        }
        this.quantidadeParcial += 1
        
        console.log(this.quantidadeParcial, this.itensCart)
    };

    @action decline = (idLivro:string) => {
        const livro = livros.find(book => book.id === idLivro)
      
        if (!this.added && livro!.id) {      
            this.livrosId.push(livro)
            this.added = true
        }else{
            this.added = false
        }
        this.quantidadeParcial -= 1

        if (this.quantidadeParcial < 0) {
            this.quantidadeParcial = 0;
            
        }else{
            this.quantidadeParcial

            console.log(this.quantidadeParcial)
        }
        
    };

    @action excludeItem = () => {
        this.quantidadeTotal = 0
    }

    @computed get total(){
        
        return 
    }
    

}

export const carrinhoStore = new CarrinhoStore();
