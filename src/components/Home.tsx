<<<<<<< HEAD

import { Layout, Menu, Breadcrumb, Icon, Row, Col, Card } from 'antd';
import * as React from 'react'
import BooksCards from './BooksCards';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Meta } = Card;
import { booksStore } from './BooksStore'

export default class Home extends React.Component {
    render() {
        return (
            <Layout>
                <Header className="header">
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Header>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <SubMenu
                                key="sub1"
                                title={
                                    <span>
                                        <Icon type="user" />
                                        subnav 1
                                    </span>
                                }
                            >
                                <Menu.Item key="1">option1</Menu.Item>
                                <Menu.Item key="2">option2</Menu.Item>
                                <Menu.Item key="3">option3</Menu.Item>
                                <Menu.Item key="4">option4</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={
                                    <span>
                                        <Icon type="laptop" />
                                        subnav 2
                                    </span>
                                }
                            >
                                <Menu.Item key="5">option5</Menu.Item>
                                <Menu.Item key="6">option6</Menu.Item>
                                <Menu.Item key="7">option7</Menu.Item>
                                <Menu.Item key="8">option8</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub3"
                                title={
                                    <span>
                                        <Icon type="notification" />
                                        subnav 3
                                    </span>
                                }
                            >
                                <Menu.Item key="9">option9</Menu.Item>
                                <Menu.Item key="10">option10</Menu.Item>
                                <Menu.Item key="11">option11</Menu.Item>
                                <Menu.Item key="12">option12</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            style={{
                                background: '#fff',
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            <div style={{ background: '#ECECEC', padding: '30px' }}>
                                <Row gutter={16}>
                                    <Col span={6}>
                                        <Card 
                                            hoverable
                                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                        >
                                            <Meta title="Europe Street beat" description="www.instagram.com" />
                                        </Card>
                                    </Col>
                                    <Col span={6}>
                                        <Card title="Card title" bordered={false}>
                                            Card content
                                        </Card>
                                    </Col>
                                    <Col span={6}>
                                        <Card title="Card title" bordered={false}>
                                            Card content
                                        </Card>
                                    </Col>
                                    <Col span={6}>
                                        <Card title="Card title" bordered={false}>
                                            Card content
                                        </Card>
                                    </Col>
                                </Row>
                                <BooksCards/>
                            </div>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
=======
import * as React from 'react'
import ButtonGroup from 'antd/lib/button/button-group';
import { Button, Icon } from 'antd';
import { observer } from 'mobx-react'
import { carrinhoStore } from "./CarinhoStore";





@observer
export default class Home extends React.Component {

    

    render() {
        return (
            <div>
                <ButtonGroup>
                    <Button onClick={() => carrinhoStore.decline()}>
                        <Icon type="minus" />
                    </Button>
                    <Button onClick={() => carrinhoStore.increase()}>
                        <Icon type="plus" />
                    </Button>
                </ButtonGroup>
            </div>
>>>>>>> origin/master
        )
    }
}