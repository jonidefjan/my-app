import { observable } from 'mobx'
import { create, persist } from 'mobx-persist'
import {AsyncStorage} from 'react-native'


class SomeItem {
    @persist @observable  name = 'some'
    @persist @observable count = 0
}

class SomeStore {
    @persist('object') @observable         obj = { a: 1, b: 2 }
    @persist('map')    @observable   stringMap = observable.map<string>({})
    @persist('list')   @observable     numList = [1,2,3,4]
    @persist('object', SomeItem) @observable s = new SomeItem
    @persist('map', SomeItem)    @observable m = observable.map<SomeItem>({})
    @persist('list', SomeItem)   @observable l = []
}

const hydrate = create({
    storage: AsyncStorage,   // or AsyncStorage in react-native.
                            // default: localStorage
    jsonify: true  // if you use AsyncStorage, here shoud be true
                    // default: true
})

// create the state
export const someStore = new SomeStore()
hydrate('some', someStore).then(() => console.log('someStore has been hydrated'))