import * as React from 'react'

import { Card, Col, Row } from 'antd';
import Meta from 'antd/lib/card/Meta';

import { livros } from './livrosData';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { Link } from 'react-router-dom';





@observer
export default class Carrinho extends React.Component {

    @observable livroIds = new Array()



    render() {
        return (

            <div style={{ background: '#ECECEC', padding: '30px' }}>

                <Row gutter={16} >
                    {livros.map(book => {
                        this.livroIds.push(book.id)
                        return (
                            <Col key={book.id} id={book.id} span={6}>
                                <Link to={`livros/${book.id}`}>
                                    <Card
                                        hoverable
                                        style={{ width: 200 }}
                                        cover={<img alt={book.titulo} src={book.capa} />}
                                    >

                                        <Meta title={book.titulo} />
                                        <Meta title={book.autor} description={'R$: ' + book.preco.toFixed(2)} />
                                    </Card>
                                </Link>
                                <br />
                            </Col>
                        )
                    })}
                </Row>



            </div>
        )
    }
}



