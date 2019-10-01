import * as React from 'react'
import { Card, Col } from 'antd';
import Meta from 'antd/lib/card/Meta';
import AddButton from './AddButton';
import { livros } from './livrosData';
import { Route, RouteComponentProps } from 'react-router-dom'


interface RouteInfo {
    value: string;
    book:any 
    
}



function find(id: string) {
    return livros.find(book => book.id === id)
}

export default class Livro extends React.Component<RouteComponentProps, RouteInfo,Route >{
    constructor(props: any) {
        super(props);
        this.state = {
            value: '',
            book: find(this.props.match.params.id)
        
        }
        console.log(props)
    }
    render() {

        return (

            <div style={{ background: '#ECECEC', padding: '30px' }}>


                <Col key={this.state.book.id} id={this.state.book.id} span={6}>

                    <Card
                        hoverable
                        cover={<img alt={this.state.book.titulo} src={this.state.book.capa} />}
                    >
                        <Meta title={this.state.book.titulo} description={this.state.book.idpreco} />
                        <br />
                        <AddButton key={this.state.book.id} />
                    </Card>

                    <br />
                </Col>

            </div>
        )
    }
}