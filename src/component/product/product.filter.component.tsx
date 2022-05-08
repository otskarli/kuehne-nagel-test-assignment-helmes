import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {StoreContext} from "../../store.context";
import { Card, Checkbox, Row, Col, Input, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const ProductFilterForm: React.FC = observer(() => {
    const {productStore} = useContext(StoreContext);

    const [loading, setLoading] = useState<boolean>(false);
    const [name, setName] = useState<string>("");
    const [categories, setCategories] = useState<any>([]);

    useEffect(() => {
        setLoading(true);

        productStore.listCategories()
            .then(() => {
                setLoading(false);
            });
    }, [productStore, setLoading]);

    useEffect(() => {
        productStore.filterProducts({
            name,
            categories
        });
    }, [name, categories, productStore])

    return (
        <Card title="I’m looking for..." bordered={false} loading={ loading }>
            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                <Row>
                    <Col span={24}>
                        <Checkbox.Group style={{ width: '100%' }} onChange={setCategories}>
                            <Row>
                                {
                                    productStore.categories.map((category: string, index: number) => (
                                        <Col key={index} xs={12} sm={8} md={4}>
                                            <Checkbox data-testid={`checkbox-${index}`} value={category}>{category}</Checkbox>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </Checkbox.Group>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Input size="large" placeholder="Type here..." prefix={<SearchOutlined />} value={name} onChange={(e) => {
                            setName(e.target.value)
                        }}/>
                    </Col>
                </Row>
            </Space>
        </Card>
    );
});

export {ProductFilterForm};