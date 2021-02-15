import React from 'react';
import styled from 'styled-components';

const MainLoader = styled.div`
    position: fixed;
    top: 0;
    background-color: #343434;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1100;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ChangePage = () => {
    return(
    <MainLoader>
        <h1>Page Loading</h1>
    </MainLoader>
    )
}