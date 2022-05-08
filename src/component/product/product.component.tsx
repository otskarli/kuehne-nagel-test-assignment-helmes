import React, {useState} from 'react';
import "./product.component.scss";
import {ProductFilterForm} from "./product.filter.component";
import {ProductList} from "./product.list.component";
import {Col, Row, Space} from 'antd';
import {ProductView} from "./product.view.component";

const Product: React.FC = () => {
    const [product, setProduct] = useState<any | null>()

    const onProductSelect = (product: any) => {
        setProduct(product);
    }

    return (
        <Row gutter={16}>
            <Col xs={24} lg={product ? 18 : 24}>
                <Space direction="vertical" size="large" style={{ display: 'flex' }}>
                    <ProductFilterForm />
                    <ProductList selectedProduct={product} onPress={ onProductSelect } />
                </Space>
            </Col>
            <Col xs={24} lg={product ? 6 : 0}>
                { product && (
                    <ProductView product={product} onClose={() => { setProduct(null) }} />
                )}
            </Col>
        </Row>
    );
};

export {Product};
