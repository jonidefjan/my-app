import { Layout, Menu, Icon, Badge, } from 'antd';
import * as React from 'react'
import { observer } from 'mobx-react'
import { carrinhoStore } from "./store/CarinhoStore";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home'
import Carrinho from './Carrinho'
import Livros from './Livros'
import Cartao from './Card/Card';
import Livro from './Livro';
import Checkout from './Checkout';

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
                        <Menu theme="dark" mode="inline" >

                            <Menu.Item key="1">
                                <Icon type="home" />
                                <span className="nav-text">Home</span>
                                <Link to="/" />
                            </Menu.Item>

                            <Menu.Item key="2">
                                <Icon type="book" />
                                <span className="nav-text">Livros</span>
                                <Link to="/livros" />
                            </Menu.Item>


                            <Menu.Item key="3">
                                <Badge count={carrinhoStore.quantidadeTotal} style={{ backgroundColor: '#87d068' }}>
                                    <Icon type="shopping-cart" />
                                </Badge>
                                <span className="nav-text">Carrinho</span>
                                <Link to="/carrinho" />

                            </Menu.Item>

                            <Menu.Item key="4">
                                <Icon type="shopping" />
                                <span className="nav-text">Checkout</span>
                                <Link to="/checkout" />
                            </Menu.Item>


                        </Menu>
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
                                <Route path="/livros/:id" render={(props) => (<Livro {...props} />)} />
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>
                </Layout>
            </Router>
        )
    }
}