import * as React from 'react'
import ButtonGroup from 'antd/lib/button/button-group';
import { Button, Icon } from 'antd';
import { observer } from 'mobx-react'
import { carrinhoStore } from "./stores/CarinhoStore";





@observer
export default class Home extends React.Component {

    

    render() {
        return (
            <div>
                <ButtonGroup>
                    <Button onClick={() => carrinhoStore.decline()}>
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