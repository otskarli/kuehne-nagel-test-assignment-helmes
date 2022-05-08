import React from 'react';
import "./container.util.scss";

type Props = {
    children: React.ReactNode,
};

const Container: React.FC<Props> = ({ children }) => (
    <div className={`container`}>
        { children }
    </div>
);


export {Container};
