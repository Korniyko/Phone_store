import React from "react";
import { render, screen } from '@testing-library/react';
import Header from "../../src/frontend/components/Header";

describe('header test', () => {
    it('correct Header Render', () => {
        render(
            <Header selected={null} />
        )
        expect(screen.queryByTestId('header')).toBeTruthy();
        expect(screen.getAllByText('Login').length).toBe(1);
    })
})