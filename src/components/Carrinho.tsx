import * as React from 'react'
import CartDrawer from './CartDrawer'
import { observer } from 'mobx-react'



@observer
export default class Carrinho extends React.Component{

    constructor(props:any){
        super(props)
        this.state= {

        }
        console.log(props)
    }

    render(){
        const cartEmpty = false;
        return(
            <div>
            {cartEmpty ? (
                <div className="emptyCartModal">
                  <h1>Carrinho Vazio</h1>
                </div>
                ) : (
                    <CartDrawer/>
                )
              
            }
            </div>
        )
    }
}