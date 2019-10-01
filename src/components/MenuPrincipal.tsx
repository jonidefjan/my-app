import * as React from 'react'
import { Icon, Badge, Menu } from 'antd'
import { Link } from 'react-router-dom'
import { carrinhoStore } from './store/CarinhoStore'


export default class MenuPrincipal extends React.Component {
    render() {
        return (
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
        )
    }
}