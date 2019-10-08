import * as React from 'react'
import { observer } from 'mobx-react'
import Livros from './Livros';





@observer
export default class Home extends React.Component {

    

    render() {
        return (
            <div>
                <Livros/>
            </div>
        )
    }
}