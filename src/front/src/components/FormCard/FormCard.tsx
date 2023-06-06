import React, { useState } from 'react';
import { 
    ButtonWrapper, 
    Container, 
    Content, 
    DropdownWrapper, 
    LeftSideContent, 
    RadioButtonMainTeacher, 
    RadioButtonPeriod, 
    RightSideContent, 
    SubjectInput, 
    Title 
} from './FormCard.styles';
import { useNavigate } from 'react-router-dom';
import { DropdownMenu } from '../Dropdown/Dropdown';
import { RadioButtons } from '../RadioButtons/RadioButtons';

export const FormCard: React.FC = () => {
    const [periodValue, setPeriodValue] = useState("");
    const [mainTeacherValue, setMainTeacherValue] = useState("");
    const [subjectValue, setSubjectValue] = useState("");
    const history = useNavigate();

    const handlePeriodRadioChange = (value: string) => {
        setPeriodValue(value);
    };

    const handleMainTeacherRadioChange = (value: string) => {
        setMainTeacherValue(value);
      };

    const handleSubjectInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSubjectValue(event.target.value);
    };

    const handleNextButtonClick = () => {
        history('/lista-alunos', {
          state: {
            period: periodValue,
            mainTeacher: mainTeacherValue,
            subject: subjectValue
          }
        });
    };

    return (
        <Container>
            <Title>
                <h1>Olá, Professor!</h1>
            </Title>
            <Content>
                <LeftSideContent>
                    <DropdownWrapper>
                        <DropdownMenu />
                    </DropdownWrapper>
                    <RadioButtonPeriod>
                        <RadioButtons 
                            label="Qual é o período dessa aula?" 
                            buttonFirstLabel="Pré-intervalo" 
                            buttonSecondLabel="Pós-intervalo" 
                            onChange={handlePeriodRadioChange}
                        />
                    </RadioButtonPeriod>
                </LeftSideContent>
                <RightSideContent>
                    <RadioButtonMainTeacher>
                        <RadioButtons 
                            label="Você é o professor principal da turma?" 
                            buttonFirstLabel="Sim" 
                            buttonSecondLabel="Não"
                            onChange={handleMainTeacherRadioChange}
                        />
                    </RadioButtonMainTeacher>
                    <SubjectInput>
                        <span>Qual matéria você leciona?</span>
                        <input 
                            type="text" 
                            placeholder="Digite aqui o nome da matéria" 
                            value={subjectValue} 
                            onChange={handleSubjectInputChange}/>
                    </SubjectInput>
                </RightSideContent>
            </Content>
            <ButtonWrapper>
                <button 
                    type='button' 
                    onClick={handleNextButtonClick}
                    disabled={!periodValue || !mainTeacherValue || !subjectValue}
                >
                AVANÇAR
                </button>
            </ButtonWrapper>
        </Container>
    )
};