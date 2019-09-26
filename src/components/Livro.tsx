import * as React from 'react'
import { Card, Col, Row } from 'antd';
import Meta from 'antd/lib/card/Meta';
import AddButton from './AddButton';
import { livros } from './livrosData';


type LinkProps = {
    match: any;
    location:any;
    history: any;
}

export default class Livro extends React.Component<LinkProps>{
    render() {
        const {
            match,
            location,
            history,
            ...props
        } = this.props;
        return (

            <div {...props}style={{ background: '#ECECEC', padding: '30px' }}>

                <Row gutter={16} >
                    {livros.map(book => {
                        
                        return(
                        <Col key={book.id} id={book.id} span={6}>

                            <Card
                                hoverable
                                cover={<img alt={book.titulo} src={book.capa} />}
                            >
                                    <Meta title={ book.titulo} description={book.preco} />
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
}