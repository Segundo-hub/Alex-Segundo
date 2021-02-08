import styled from "styled-components";

export const PlayerContainer = styled.div`
    width: 100%;
    background-color: var(--dark-primary);
    padding: 1rem;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2000;
`;

export const PlayIcon = styled.span`
    position: relative;
    width: 30px;
    height: 30px;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    ::after{
        position: absolute;
        content: "";
        display: block;
        top: 0;
        bottom: 0;
        right: 0;
        left:0;
        z-index: -1;
        border-radius: 50%;
        border: 1px solid silver;
    }
`;