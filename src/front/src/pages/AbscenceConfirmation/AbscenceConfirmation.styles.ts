import { styled } from "styled-components";

export const Container = styled.section`
    h1 {
        font-weight: 700;
        font-size: 36px;
    }
`;

export const Content = styled.div`
    background-color: #F2F2F2;
    padding: 30px;
    border-radius: 20px;
    width: 816px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 180px;
`; 

export const ImageContainer = styled.div`
    img {
        width: 214px;
        height: 214px;
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 16px;

    button {
        width: 326px;
        background: #30F2CF;
        border-radius: 20px;
        padding: 10px;
        cursor: pointer;
        font-size: 20px;
        font-weight: 700;
        border: none;
    }
`;
