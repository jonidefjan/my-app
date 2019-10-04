import * as React from 'react'
import { Card, Col, Row, Icon } from 'antd'
import { Link } from 'react-router-dom'
import Meta from 'antd/lib/card/Meta'
import AddButton from './AddButton'
import { carrinhoStore } from "./store/CarinhoStore";
import { observer } from 'mobx-react'

type ThisProps = {
    spanNum:number
  }
@observer
export default class ItensCart extends React.Component<ThisProps> {


    render() {
        return (
            <Row gutter={16} justify={"start"} align={"middle"} type={"flex"}>
                {carrinhoStore.livrosId.map((book: any) => {
                    
                    return (
                            <Col key={book.id} span={this.props.spanNum} >
                                <Card
                                    title={book.titulo}
                                    hoverable
                                    style={{ width: 200 }}
                                    cover={<img alt={book.titulo} src={book.capa} />}
                                    extra={<Icon type="close" onClick={() => carrinhoStore.excludeItem()}/>}
                                >
                                    <Link to={`livros/${book.id}`}>
                                        <Meta title={book.autor} description={'R$: ' + book.preco + ' ' + book.quantidade} />
                                    </Link>
                                    <br />
                                    <AddButton key={book.id} idLivro={book.id}/>
                                </Card>
                                <br />
                            </Col>
                        )


                    

                })
                }
            </Row>
        )
    }
}