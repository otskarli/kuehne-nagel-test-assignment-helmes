import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {StoreContext} from "../../store.context";
import {Card, Space} from "antd";
import {StyledTag} from "../util/tag.uril";

type Props = {
    onPress: any;
    selectedProduct: any;
}

const ProductList: React.FC<Props> = observer((props: any) => {
    const {productStore} = useContext(StoreContext);

    return (
        <Space direction="vertical" size="small" style={{ display: 'flex' }}>
            {
                productStore.products.map((product, index) => (
                    <Card className={`select-card ${props.selectedProduct && props.selectedProduct.productName === product.productName && 'active'}`} key={index} bordered={false} onClick={ () => {
                        props.onPress(product);
                    } }>
                        <div className={`product-wrapper`}>
                            <div>
                                <p className={`product-title`}>{ product.productName }</p>
                                {
                                    product.tags.map((tag: any, index: number) => (
                                        <StyledTag key={index}>{tag}</StyledTag>
                                    ))
                                }
                            </div>
                            <span className={`product-category`}>{ product.category }</span>
                        </div>
                    </Card>
                ))
            }
        </Space>
    );
});

export {ProductList};