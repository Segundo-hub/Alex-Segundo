import styled from "styled-components";

export const DeveloperAbout = styled.article`
    padding: 1rem;
    font-family: 'JetBrains Mono Regular';
`;

export const DeveloperDefinition = styled.article`
    background-color: var(--dark-alpha);
    padding: .5rem;
    border-radius: .15rem;
    @media (min-width: 1200px){
        padding: 1.5rem;
    }
`;

export const Developer = {
    Name: styled.h2`
        text-align: center;
    `,
    Description: styled.p`
        padding-top: 10px;
        &::first-line{
            text-align: center
        }
    `
}