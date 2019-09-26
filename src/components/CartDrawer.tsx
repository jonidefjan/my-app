import * as React from 'react'
import { Drawer, Button } from 'antd';
import { observable } from 'mobx';
import ItensCart from './ItensCart';




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

          <ItensCart/>

        </Drawer>
      </div>
    );
  }
}