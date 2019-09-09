import { Layout, Menu, Icon, Badge } from 'antd';
import * as React from 'react'
import { observer } from 'mobx-react'
import { carrinhoStore } from "./CarinhoStore";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home'
import Carrinho from './Carrinho'
import Livros from './Livros'
import Cartao from './Card/Card';


const { Header, Content, Footer, Sider, } = Layout;




@observer
export default class Conteudo extends React.Component {

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
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>

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
                                <Badge count={carrinhoStore.counter} style={{ backgroundColor: '#87d068' }}>
                                    <Icon type="shopping-cart" />
                                </Badge>
                                <span className="nav-text">Carrinho</span>
                                <Link to="/carrinho" />
                            </Menu.Item>

                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }} />
                        <Content style={{ margin: '24px 16px 0' }}>
                            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                                <Route exact path="/" component={Home} />
                                <Route path="/livros" component={Livros} />
                                <Route path="/carrinho" component={Carrinho} />
                                <Route path="/card" component={Cartao}/>
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>
                </Layout>
            </Router>
        )
    }
}