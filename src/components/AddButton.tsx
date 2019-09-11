import * as React from 'react'
import ButtonGroup from 'antd/lib/button/button-group';
import { Button, Icon } from 'antd';
import { observer } from 'mobx-react'
import { carrinhoStore } from "./CarinhoStore";





@observer
export default class AddButton extends React.Component {
    constructor(props: string){
        super(props)

                }

    render() {
        return (
            <div>
                <ButtonGroup >
                    <Button onClick={(livroId) => carrinhoStore.decline(livroId)} >
                        <Icon type="minus" />
                    </Button>
                    <Button onClick={(livroId) => carrinhoStore.increase(livroId)}>
                        <Icon type="plus" />
                    </Button>
                </ButtonGroup>
            </div>
        )
    }
}