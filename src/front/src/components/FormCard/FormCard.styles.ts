import styled from 'styled-components';

export const Container = styled.section`
    background: #F2F2F2;
    margin: 180px 230px;
    padding: 28px 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    width: 816px;
`;

export const Title = styled.div`
    margin: 0;
    font-weight: 700;

    h1 {
        font-size: 36px;
    }
`;

export const Content = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

export const LeftSideContent = styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

export const DropdownWrapper = styled.div`
`;

export const RadioButtonPeriod = styled.div`
`;

export const RightSideContent = styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

export const RadioButtonMainTeacher = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SubjectInput = styled.form`
    display: flex;
    flex-direction: column;
    gap: 8px;

    span {
        font-size: 20px;
        font-weight: 700;
    }

    input {
        background-color: #F2F2F2;
        border: 1px solid rgba(0, 0, 0, 0.3); 
        border-radius: 20px;
        padding: 14px;
    }

`;

export const ButtonWrapper = styled.div`
    margin-top: 56px;

    button {
        background-color: #30F2CF;
        color: black;
        border-radius: 20px;
        font-size: 20px;
        font-weight: 700;
        width: 260px;
        border: none;
        padding: 10px;
        cursor: pointer;

        &:disabled {
            background-color: lightgrey;
            color: white;
            cursor: auto;
        }
    }
`;