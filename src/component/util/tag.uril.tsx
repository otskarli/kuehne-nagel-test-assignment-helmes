import React from 'react';
import "./tag.util.scss";
import {Tag} from "antd";

type Props = {
    children: React.ReactNode,
};

const StyledTag: React.FC<Props> = ({ children }) => (
    <Tag data-testid={`product-tag`} color="rgba(18, 184, 255, .15)" style={{ color: '#12B8FF'}}>{children}</Tag>
);


export {StyledTag};
