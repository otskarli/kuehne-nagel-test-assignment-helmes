import React, {useState} from 'react';
import {Button, Card, Radio, Space} from "antd";
import {StyledTag} from "../util/tag.uril";

type Props = {
    product: any;
    onClose: any;
}

const ProductView: React.FC<Props> = (props: any) => {
    const {product} = props;

    const [option, setOption] = useState<number>(2)

    return (
        <div className={`responsive-backdrop`}>
            <Card title={`Product Details`} extra={
                <Button onClick={ props.onClose }>close</Button>
            } bordered={false}>
                <Space direction="vertical" size="large" style={{ display: 'flex' }}>
                    <p className={`product-title`} style={{ margin: 0 }}>{ product.productName }</p>

                    <div className={`product-tags`}>
                        {
                            product.tags.map((tag: any, index: number) => (
                                <StyledTag key={index}>{tag}</StyledTag>
                            ))
                        }
                    </div>

                    <a href={product.manufacturerUrl} target={`_blank`} className={`ant-btn ant-btn-primary`}>Go to Manufacturer</a>

                    <div className={`product-description`}>
                        { product.description.map((d: string, index: number) => (
                            <p key={index}>{ d }</p>
                        )) }
                    </div>

                    { product.option1 && (
                        <Space direction="vertical" size="small" style={{ display: 'flex' }}>
                            <Radio.Group onChange={(e) => { setOption(e.target.value) }} value={option}>
                                <Radio value={ 1 }>{ product.option1 }</Radio>
                            </Radio.Group>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </Space>
                    ) }

                    { product.option2 && (
                        <Space direction="vertical" size="small" style={{ display: 'flex' }}>
                            <Radio.Group onChange={(e) => { setOption(e.target.value) }} value={option}>
                                <Radio value={ 2 }>{ product.option2 }</Radio>
                            </Radio.Group>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
                        </Space>
                    ) }
                </Space>
            </Card>
        </div>
    );
};

export {ProductView};