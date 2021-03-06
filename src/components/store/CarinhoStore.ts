import { action, observable } from 'mobx';
import { livros } from '../livrosData'
import { persist } from 'mobx-persist';
import { ItemCarrinho } from '../Interfaces/ItemCarrinho';
import { Livro } from '../Interfaces/Livro';




class CarrinhoStore {

    @persist @observable quantidadeTotal = 0;
    @persist @observable quantidadeParcial = 0;

    @persist @observable valorTotal=0;
    @persist @observable valorParcial = 0;


    @persist @observable precoTotal: number;
    @persist @observable itensCarrinho = new Array<ItemCarrinho>()
    @persist @observable livro = new Array<Livro>()
    @persist @observable totalLivros = new Array<number>()

    @observable reducer = (accumulator: number, currentValue: number) => accumulator + currentValue;

    @action increase = (idLivro: any) => {
        const livro = livros.find(book => book.id === idLivro)

        if (!!livro) {
            this.quantidadeTotal += 1
            const itemCarrinho = this.itensCarrinho.find((value) => {
                return value.livro.id == idLivro
            })

            if (!!itemCarrinho) {
                itemCarrinho.qtdLivros += 1
                this.parcial(itemCarrinho.qtdLivros, livro.preco)
                this.valorTotal += livro.preco

            } else {
                this.itensCarrinho.push({ livro, qtdLivros: 1 })
                this.parcial(livro.preco, 1)
                this.valorTotal += livro.preco

            }
        } else {
            alert(`Não foi encontrado o livro de ID: ${idLivro}`)
        }
    };

    @action decline = (idLivro: string) => {
        const livro = livros.find(book => book.id === idLivro)


        if (!!livro) {

            const itemCarrinho = this.itensCarrinho.find((value) => {
                return value.livro.id == idLivro
            })

            if (!!itemCarrinho) {
                this.quantidadeTotal += -1
                itemCarrinho.qtdLivros += -1

                this.parcial(itemCarrinho.qtdLivros, livro.preco)
                this.valorTotal -= livro.preco

                if (itemCarrinho.qtdLivros <= 0) {
                    this.excludeItem(itemCarrinho.livro.id, itemCarrinho.qtdLivros)
                }
            } else {
                alert(`Não foi encontrado no carrinho o livro de ID: ${idLivro}`)
            }
        } else {
            alert(`Não foi encontrado o livro de ID: ${idLivro}`)
        }
    };

    @action excludeItem = (idLivro: string, qntUni: number) => {
        if (qntUni > 0) {
            this.quantidadeTotal -= qntUni
        }

        this.itensCarrinho = this.itensCarrinho.filter((value) => {
            return idLivro != value.livro.id
        })

    }

    @action parcial(valorUni: number, quantidadeUni: number) {
        let parcial = (this.valorParcial = valorUni * quantidadeUni)
        return parcial.toLocaleString('pt-br', { style: 'currency', currency: 'BRL', maximumFractionDigits: 2 })
        
    }





}

export const carrinhoStore = new CarrinhoStore();
