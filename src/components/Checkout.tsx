import * as React from 'react'
import { Steps, Divider } from 'antd';
import ItensCart from './ItensCart';
import { Desconto } from './Desconto';
import { observer } from 'mobx-react';

const { Step } = Steps;



@observer
export default class Checkout extends React.Component {

    state = {
        current: 0,
        conteudo: <ItensCart spanNum={4} />

    }

    onChange = (current: number) => {
        this.setState({ current });
        if (current == 0) {
            this.setState({conteudo: <ItensCart spanNum={4} />}) 
        } else if (current == 1) {
            this.setState({conteudo: <Desconto porcentagem={50}/>})
        } else if (current == 2) {
            this.setState({conteudo: <div><ItensCart spanNum={4} /><Desconto porcentagem={100}/></div>})
        }
    }


render() {
    const { current } = this.state;

    return (
        <div>
            <Steps current={current} onChange={this.onChange}>
                <Step title="Passo 1" description="Produtos." />
                <Step title="Passo 2" description="Valor total." />
                <Step title="Passo 3" description="Pagamento." />
            </Steps>

            <Divider />


            <div style={{ margin: '0 auto', width: '100%' }}>
                {this.state.conteudo}
            </div>




        </div>
    );
}
}