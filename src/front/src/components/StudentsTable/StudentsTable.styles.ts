import { styled } from "styled-components";

export const Container = styled.section`
`;

export const Title = styled.div`
    h1 {
        color: white;
        font-size: 36px;
    }
`;

export const Content = styled.div`
    background-color: #F2F2F2;
    padding: 30px;
    border-radius: 20px;
    width: 1128px;
`;

export const ContentHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    span {
        font-size: 24px;
    }
`;

export const TableWrapper = styled.div`
    margin-top: 16px;
`;

export const TableHeader = styled.div`
    display: flex;
    justify-content: space-between;

    span {
        color: rgba(0, 0, 0, 0.3);
        font-size: 20px;
        font-weight: 700;
    }
`;

export const TableContent = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 16px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    cursor: pointer;

    &:last-child {
        border-bottom: none;
    }

    &:hover {
        background: #30F2CF;
    }

    &.active {
        background: #30F2CF;
    } 
    span {
        color: rgba(0, 0, 0, 0.8);
        font-size: 20px;
        font-weight: 700;
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

        &:disabled {
            background: lightgrey;
            color: white;
            cursor: 
        }
    }
`;