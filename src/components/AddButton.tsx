import * as React from 'react'
import ButtonGroup from 'antd/lib/button/button-group';
import { Button, Icon } from 'antd';
import { observer } from 'mobx-react'
import { carrinhoStore } from "./store/CarinhoStore";


const decline = () =>{
    alert("aaaaa")
}


@observer
export default class AddButton extends React.Component {
   

    render() {
        return (
            <div>
                <ButtonGroup >
                    <Button onClick={decline} >
                        <Icon type="minus" />
                    </Button>
                    <Button onClick={() => carrinhoStore.increase()}>
                        <Icon type="plus" />
                    </Button>
                </ButtonGroup>
            </div>
        )
    }
}