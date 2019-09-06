import * as React from 'react'
//import { Row, Col, Card } from 'antd';
import './Data/livrosData.json'
import { observer } from 'mobx-react'

//const { Meta } = Card;


@observer
export default class BooksCards extends React.Component{

    render(){
        return(
            {/* <Row gutter={16}>
                <Col span={6}>
                    <Card
                        hoverable
                        cover={<img alt={this.props.store.titulo} src={this.props.store.capa} />}
                    >
                        <Meta title={this.props.store.titulo} description={this.props.store.autor } />
                    </Card>
                </Col>
            </Row> */}
        )
    }
}
