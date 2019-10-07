import * as React from 'react'
import {  PageHeader } from 'antd'
import { carrinhoStore } from './store/CarinhoStore'
import { descontoStore } from './store/DescontoStore';
import { observer } from 'mobx-react';



@observer
export class Desconto extends React.Component{
    render(){
    console.log(descontoStore.CalcDesc())
    return (
        <div>
            <PageHeader title="Valor total"  subTitle="Valor Total e Descontos" />
            <h3>{`Valor total: ${carrinhoStore.valorTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL', maximumFractionDigits: 2 })}`}</h3>
            <h3>{`Valor Com Desconto: ${(descontoStore.CalcDesc()).toLocaleString('pt-br', { style: 'currency', currency: 'BRL', maximumFractionDigits: 2 })}`}</h3>
            {/* <Progress percent={50} status="active" /> */}
        </div>
    )
}
}