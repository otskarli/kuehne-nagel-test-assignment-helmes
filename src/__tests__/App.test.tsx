import '@testing-library/jest-dom';

import React from 'react';
import {render, screen} from '@testing-library/react';
import {App} from "../component/app/app.component";

describe("Test", () => {
    beforeAll(() => {
        window.matchMedia = window.matchMedia || function () {
            return {
                addListener: jest.fn(),
                removeListener: jest.fn(),
            };
        };
    });

    test('renders products list title', () => {
        render(<App />);
        const titleElement = screen.getByText(/Create Demand/i);
        expect(titleElement).toBeInTheDocument();
    });

    test('renders product filter form card', () => {
        render(<App />);
        const titleElement = screen.getByText(/I’m looking for.../i);
        expect(titleElement).toBeInTheDocument();
    });
});