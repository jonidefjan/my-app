import * as React from 'react';
import './Hello.css'

export interface Props {
    nome: string;
    nivelDeEntusiasmo?:number; 
}

interface State {
    entusiasmoAtual: number;
}

class Hello extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { entusiasmoAtual: props.nivelDeEntusiasmo || 1 };
    }

    noIncremento = () => this.atualizaEntusiasmo(this.state.entusiasmoAtual + 1);
    noDecremento = () => this.atualizaEntusiasmo(this.state.entusiasmoAtual - 1);

    render(){
        const { nome } = this.props;

        if (this.state.entusiasmoAtual <= 0){
            throw new Error('Você poderia ser um pouco mais entusiasmado. :D');
        }

        return (
            <div className="hello">
                <div className="saudacao">
                    Eai {nome + marcasDeExclamacao(this.state.entusiasmoAtual)}
                </div>
                <button onClick={this.noDecremento}> - </button>
                <button onClick={this.noIncremento}> + </button>
            </div>
        );
    }

    atualizaEntusiasmo( entusiasmoAtual: number ) {
        this.setState({ entusiasmoAtual })
    }
}

export default Hello;

function marcasDeExclamacao(numChars: number){
    return Array(numChars + 1).join('!');
}
