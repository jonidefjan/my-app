import * as React from 'react'
import { livros } from './livrosData'
import { Card } from 'antd'
import { Link } from 'react-router-dom'
import Meta from 'antd/lib/card/Meta'
import AddButton from './AddButton'


export default class ItensCart extends React.Component {


    render() {
        return (
            <div>
                {livros.map((book: any) => {
                    let qnt = book.quantidade
                    if (qnt > 0) {

                        return (
                            <div key={book.id}>
                                <Card
                                    hoverable
                                    style={{ width: "100hv" }}
                                    cover={<img alt={book.titulo} src={book.capa} />}

                                >
                                    <Link to={`livros/${book.titulo}`}>
                                        <Meta title={book.titulo} description={'R$: ' + book.preco + ' ' + book.quantidade} />
                                    </Link>
                                    <br />
                                    <AddButton key={book.id} />
                                </Card>
                                <br />
                            </div>
                        )
                    } else {
                        return null
                    }

                })
                }
            </div>
        )
    }
}