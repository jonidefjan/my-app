import * as React from 'react'
import { Drawer, Button, Card } from 'antd';
import AddButton from './AddButton';
import { Link } from 'react-router-dom';
import Meta from 'antd/lib/card/Meta';
import { livros } from './livrosData'
import { observable } from 'mobx';

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
          <div>
            {livros.map(function (book) {
              if (book.quantidade > 0) {

                return (
                  <div>
                    <Card
                      hoverable
                      style={{ width: "100hv" }}
                      cover={<img alt={book.titulo} src={book.capa} />}
                      key={book.id}
                    >
                      <Link to={`livros/${book.titulo}`}>
                        <Meta title={book.titulo} description={'R$: ' + book.preco +' '+ book.quantidade} />
                      </Link>
                      <br />
                      <AddButton key={book.id} />
                    </Card>
                    <br />
                  </div>
                )
              } else {
                return null
              }

            })}
          </div>

        </Drawer>
      </div>
    );
  }
}