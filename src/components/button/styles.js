import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 20px;
    border: 1px solid: #90ee90;
    background-color: #90ee90;
    color: #0f172a;
    font-size: 1.5rem;
    font-weight: 600;
    flex: 1;
    cursor:pointer;
    transition:0.2s;

    &:hover {
        opacity: 0.6;
    }

    button:hover{
    transform:scale(1.05);
}

    button:active{
    transform:scale(0.95);
}
`
