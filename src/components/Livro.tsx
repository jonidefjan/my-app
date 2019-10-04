import * as React from 'react'
import { Card, Row, Col, Breadcrumb } from 'antd';

import AddButton from './AddButton';
import { livros } from './livrosData';
import { RouteComponentProps, Link } from 'react-router-dom'
import Meta from 'antd/lib/card/Meta';


interface Params {
    id: string;
}


interface livroProps extends RouteComponentProps<Params> {
    value: string;
    book: any;
}

function find(id: string) {
    return livros.find(book => book.id === id)
}

export const Livro = (props: livroProps) => {
    const book = find(props.match.params.id)
    return (

        <div style={{ background: '#ECECEC', padding: '30px' }} key={book!.id}>

            <Breadcrumb>
                <Breadcrumb.Item>
                    <Link to="/">Home</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Link to="/livros">Livros</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>{book!.titulo}</Breadcrumb.Item>
            </Breadcrumb>

            <br/>

            <Row gutter={16}>
                <Col span={8}>
                    <Card

                        bordered={true}
                        cover={<img alt={book!.titulo} src={book!.capa} />}
                    >


                    </Card>
                </Col>
                <Col span={12}>
                    <Card title={book!.titulo} bordered={true}>
                        <Meta title={book!.autor} description={book!.description} />
                        <br/>
                        <Meta title={'R$: '+book!.preco.toFixed(2)} />
                        <br />
                        <AddButton key={book!.id} idLivro={book!.id}/>
                    </Card>

                </Col>

            </Row>
        </div>
    )

}