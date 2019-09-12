import * as React from 'react'
import ButtonGroup from 'antd/lib/button/button-group';
import { Button, Icon } from 'antd';
import { observer } from 'mobx-react'
import { carrinhoStore } from "./CarinhoStore";
import { observable } from 'mobx';





@observer
export default class AddButton extends React.Component {
    @observable livroId:any;

    render() {
        return (
            <div>
                <ButtonGroup >
                    <Button onClick={() => carrinhoStore.decline(this.livroId)} >
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