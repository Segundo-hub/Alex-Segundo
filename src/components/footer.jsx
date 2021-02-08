import React from 'react';
import styled from 'styled-components';
import { Container } from './container';

const FooterApp = styled.footer`
    background-color: #3434;
    padding: 1.5rem 0; 
    display: none; 
`;


export const Footer = () => {
    return (
    <FooterApp>
        <Container>
            <p>
                This is footer
            </p>
        </Container>
    </FooterApp>
    )
}