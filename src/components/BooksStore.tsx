import { observable } from 'mobx'
import './Data/livrosData.json'
import { create, persist } from 'mobx-persist'


class BookItem {
    @persist @observable id: string;
    @persist @observable titulo: string;
    @persist @observable autor: string;
    @persist @observable preco: string;
    @persist @observable capa: string;
    @persist @observable description: string;
    @persist @observable quantidade: number;
}

class BooksStore {
    @persist('map', BookItem)    @observable m = observable.map<BookItem>({})

}

const hydrate = create({
    storage: localStorage,   // or AsyncStorage in react-native.
                            // default: localStorage
    jsonify: true  // if you use AsyncStorage, here shoud be true
                    // default: true
})

export const booksStore = new BooksStore()
hydrate('book', BooksStore).then(() => console.log('BooksStore has been hydrated'))
