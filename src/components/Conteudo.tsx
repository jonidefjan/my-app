import { Layout } from 'antd';
import * as React from 'react'
import { observer } from 'mobx-react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home'
import Carrinho from './Carrinho'
import Livros from './Livros'
import Cartao from './Card/Card';
import Livro from './Livro';
import Checkout from './Checkout';
import MenuPrincipal from './MenuPrincipal';

const { Header, Content, Footer, Sider, } = Layout;




@observer
export default class Conteudo extends React.Component {

    placeHolder: string
    text = <span>Adicionado Ao Carrinho</span>;
    content = (
        <div>
            <p>{this.placeHolder}</p>
        </div>
    );

    render() {
        return (
            <Router>
                <Layout>
                    <Sider
                        breakpoint="lg"
                        collapsedWidth="0"
                        onBreakpoint={broken => {
                            console.log(broken);
                        }}
                        onCollapse={(collapsed, type) => {
                            console.log(collapsed, type);
                        }}
                    >
                        <div className="logo" />

                        <MenuPrincipal />

                    </Sider>

                    <Layout>
                        <Header style={{ background: 'rgba(0, 21, 41)', paddingLeft: 50, fontSize: 24, color: '#fff', textDecoration: 'none', cursor: 'pointer' }} >
                            E-Book Store
                        </Header>

                        <Content style={{ margin: '24px 16px 0' }}>
                            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                                <Route exact path="/" component={Home} />
                                <Route path="/livros" component={Livros} />
                                <Route path="/carrinho" component={Carrinho} />
                                <Route path="/card" component={Cartao} />
                                <Route path="/checkout" component={Checkout} />
                                <Route exact path="/livros/:id" component={Livro} />
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                        
                    </Layout>
                </Layout>
            </Router>
        )
    }
}