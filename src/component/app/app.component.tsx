import React from 'react';
import {Container} from "../util/container.uril";
import {Product} from "../product/product.component";
import {Typography, Tabs} from 'antd';

const { Title } = Typography;
const { TabPane } = Tabs;

const App: React.FC = () => {
    return (
        <Container>
            <Title level={3}>Create Demand</Title>
            <Title level={5}>Search the product you need here. Use tags to find any alternative. </Title>

            <Tabs defaultActiveKey="1">
                <TabPane tab="1 Product" key="1">
                    <Product />
                </TabPane>
                <TabPane tab="2 Addresses" key="2" disabled={true}></TabPane>
                <TabPane tab="3 Overview" key="3" disabled={true}></TabPane>
            </Tabs>
        </Container>
    );
}

export {App};
