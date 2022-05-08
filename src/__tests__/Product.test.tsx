import '@testing-library/jest-dom';

import React from 'react';
import {render, screen} from '@testing-library/react';
import {ProductView} from "../component/product/product.view.component";

const product = {
    "productName": "Foxit software PhantomPDF Standard",
    "tags": [
        "PDF", "Change", "Create", "Maintenance", "Business", "FoxIT"
    ],
    "category": "Text Editors",
    "manufacturerUrl": "https://www.foxitsoftware.com/de/pdf-editor",
    "description": [
        "PhantomPDF provides powerful PDF Editor capabilities to allow authors to update their documents themselves.",
        "Standard - Simple interface and limited functionality."
    ],
    "option1": "1 Year Maintenance",
    "option2": "Without Maintenance"
};

describe("Test", () => {
    beforeAll(() => {
        window.matchMedia = window.matchMedia || function () {
            return {
                addListener: jest.fn(),
                removeListener: jest.fn(),
            };
        };
    });

    test('renders products view cart title', () => {
        render(<ProductView product={ product } onClose={ () => {} } />);
        const titleElement = screen.getByText(/Product Details/i);
        expect(titleElement).toBeInTheDocument();
    });

    test('renders name on screen', () => {
        render(<ProductView product={ product } onClose={ () => {} } />);
        const titleElement = screen.getByText(/Foxit software PhantomPDF Standard/i);
        expect(titleElement).toBeInTheDocument();
    });

    test('6 styled tags to be rendered', () => {
        render(<ProductView product={ product } onClose={ () => {} } />);
        const tags = screen.getAllByTestId("product-tag");
        expect(tags).toHaveLength(6);
    });
});