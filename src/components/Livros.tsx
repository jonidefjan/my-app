import * as React from 'react'

import { Card, Col, Row } from 'antd';
import Meta from 'antd/lib/card/Meta';
import AddButton from './AddButton';
import { livros } from './livrosData';
import { observer } from 'mobx-react';



@observer
export default class Carrinho extends React.Component {





    render() {
        return (
            <div style={{ background: '#ECECEC', padding: '30px' }}>

                <Row gutter={16} >
                    {livros.map(book => (
                        <Col key={book.id} id={book.id} span={6}>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt={book.titulo} src={book.capa}/>}
                            >
                                <Meta title={book.titulo} description={book.preco} />
                                <br/>
                                <AddButton />
                            </Card>
                            <br/>
                        </Col>
                    ))}
                </Row>



            </div>
        )
    }
}


