import * as React from 'react'

import { Card, Col, Row } from 'antd';
import Meta from 'antd/lib/card/Meta';
import AddButton from './AddButton';
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
                        console.log(this.livroIds)
                        return(
                        <Col key={book.id} id={book.id} span={6}>

                            <Card
                                hoverable
                                style={{ width: 200 }}
                                cover={<img alt={book.titulo} src={book.capa} />}
                            >
                                <Link to={`livros/${book.id}`}>
                                    <Meta title={ book.titulo} description={book.preco} />
                                </Link>
                                <br />
                                <AddButton key={book.id}/>
                            </Card>

                            <br />
                        </Col>
                    )})}
                </Row>



            </div>
        )
    }

    addToCart = (idLivro: string) => {

        return (null)
    };
}



