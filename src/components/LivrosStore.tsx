import "./livrosData.ts/index.js"
import { observable } from 'mobx';

class LivrosStore {
    @observable filters = new Map([['livrosData', false]]);
}

export const livrosData = new LivrosStore();