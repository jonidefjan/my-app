import * as React from 'react'
import { Drawer, Button } from 'antd';
import { observable } from 'mobx';
import ItensCart from './ItensCart';
import { carrinhoStore } from './store/CarinhoStore';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';



@observer
export default class CartDrawer extends React.Component {
  @observable state = { visible: false };



  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showDrawer}>
          Open
        </Button>
        <Drawer
          title="Carrinho"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <ItensCart spanNum={16} />
          <br/>
          <br/>
          <div style={{
            position: 'absolute',
            left: 0,
            bottom: 0,
            width: '100%',
            borderTop: '1px solid #e9e9e9',
            padding: '10px 16px',
            background: '#fff',
            textAlign: 'right',
          }}>
            <p>{carrinhoStore.valorTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL', maximumFractionDigits: 2 })}</p>
            <Button onClick={this.onClose} style={{ marginRight: 8 }}>
              Cancelar
            </Button>
            <Button onClick={this.onClose} type="primary">
              <Link to='/checkout'>Checkout</Link>
            </Button>
          </div>
        </Drawer>
      </div>
    );
  }
}