import * as React from 'react'
import { Steps, Divider } from 'antd';
import { any } from 'prop-types';
import ItensCart from './ItensCart';
import { Desconto } from './Desconto';

const { Step } = Steps;




export default class Checkout extends React.Component {
    state = {
        current: 0,
        content: any
    };

    onChange = (current: number) => {
        console.log('onChange:', current);
        this.setState({ current });
        if (current == 0) {
            <ItensCart spanNum={4}/>
        }else if (current == 1) {
            <ItensCart spanNum={4}/>
        }else if (current == 2) {
             <ItensCart spanNum={4}/>
        }

    };

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

                
                <div style={{margin:'0 auto', width: '100%'}}>
                    <ItensCart spanNum={4}/>
                </div>

                <div style={{margin:'0 auto', width: '100%'}}>
                    <Desconto/>
                </div>
                



            </div>
        );
    }
}