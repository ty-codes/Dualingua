import styled from "styled-components"

export default function PageWrapper({ children, ...others }) {
    return (
        <Wrapper {...others}>
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding-inline: 25px;
    padding-top: 20px;
    background-color: var(--background);
    height: calc(100vh - 70px);
    overflow-y: auto;
    overflow-x: hidden;

    @media (max-width: 425px) {
        padding-inline: 20px;
    }
    
`;