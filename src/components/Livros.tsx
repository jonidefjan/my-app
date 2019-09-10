import * as React from 'react'

import { Card, Col, Row } from 'antd';
import Meta from 'antd/lib/card/Meta';
import Home from './Home';

export default class Carrinho extends React.Component {


    render() {

        return (
            <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Row gutter={16}>
                    <Col span={6}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                            <Home/>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                            <Home/>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                            <Home/>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                            <Home/>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}


