import React from "react";
import { Router, MemoryRouter, Route } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from "../../src/frontend/components/Header";
import { createMemoryHistory } from "history";

describe('header test', () => {
    it('correct Header Render', () => {
        render(
            <Header selected={null} />
        )
        expect(screen.queryByTestId('header')).toBeTruthy();
        expect(screen.getAllByText('Login').length).toBe(1);
    });
    it('handle login click', () => {
        const history = createMemoryHistory()
        render(

            <Router history={history}>
                <Route path={'/'} component={Header} />
            </Router>

        )
        const button = screen.getAllByText('Login')
        fireEvent.click(button[0])
        expect(history.location.pathname).toBe('/login')


    })
})

