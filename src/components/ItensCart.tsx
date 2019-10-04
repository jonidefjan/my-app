import * as React from 'react'
import { Card, Col, Row, Icon } from 'antd'
import { Link } from 'react-router-dom'
import Meta from 'antd/lib/card/Meta'
import AddButton from './AddButton'
import { carrinhoStore } from "./store/CarinhoStore";
import { observer } from 'mobx-react'
import { ItemCarrinho } from './Interfaces/ItemCarrinho'

type ThisProps = {
    spanNum:number
  }
@observer
export default class ItensCart extends React.Component<ThisProps> {


    render() {
        return (
            <Row gutter={16} justify={"start"} align={"middle"} type={"flex"}>
                {carrinhoStore.itensCarrinho.map((itemCarinho: ItemCarrinho) => {
                    const {livro, qtdLivros} = itemCarinho
                    return (
                            <Col key={livro.id} span={this.props.spanNum} >
                                <Card
                                    title={livro.titulo}
                                    hoverable
                                    style={{ width: 200 }}
                                    cover={<img alt={livro.titulo} src={livro.capa} />}
                                    extra={<Icon type="close" onClick={() => carrinhoStore.excludeItem(livro.id)}/>}
                                >
                                    <Link to={`livros/${livro.id}`}>
                                        <Meta title={livro.autor} description={'R$: ' + livro.preco + ' ' + qtdLivros} />
                                    </Link>
                                    <br />
                                    <AddButton key={livro.id} idLivro={livro.id}/>
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