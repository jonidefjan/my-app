import * as React from 'react'
import ButtonGroup from 'antd/lib/button/button-group';
import { Button, Icon } from 'antd';
import { observer } from 'mobx-react'
import { carrinhoStore } from "./store/CarinhoStore";


interface ButtonProps {
    idLivro:string
} 


@observer
export default class AddButton extends React.Component<ButtonProps>{
   

    render() {
        return (
            <div>
                <ButtonGroup >
                    <Button onClick={() => carrinhoStore.decline(this.props.idLivro)} >
                        <Icon type="minus" />
                    </Button>
                    <Button onClick={() => carrinhoStore.increase(this.props.idLivro)}>
                        <Icon type="plus" />
                    </Button>
                </ButtonGroup>
            </div>
        )
    }
}