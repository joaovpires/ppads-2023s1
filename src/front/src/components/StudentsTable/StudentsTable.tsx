import { ButtonWrapper, Container, Content, ContentHeader, TableContent, TableHeader, TableWrapper, Title } from "./StudentsTable.styles";
import data from '../../data/data.json'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface IStudentTable {
    turma: string;
    periodo: string;
    materia?: string;
}


export const StudentsTable: React.FC<IStudentTable> = ({ turma, periodo, materia}) => {
    const [selectedIndices, setSelectedIndices] = useState(new Set());
    const history = useNavigate();

    const handleTableContentClick = (index: any) => {
        if (selectedIndices.has(index)) {
          selectedIndices.delete(index);
        } else {
          selectedIndices.add(index);
        }
        setSelectedIndices(new Set(selectedIndices));
    };

    const isDisabled = selectedIndices.size === 0; 


    return(
        <Container>
            <Title>
                <h1>Professor, aqui está a lista dos alunos da turma.</h1>
            </Title>
            <Content>
                <ContentHeader>
                    <span>{`Turma: ${turma}`}</span>
                    <span>{`Período: ${periodo}`}</span>
                    <span>{materia ? `Matéria: ${materia}` : ''}</span>
                </ContentHeader>
                <TableWrapper>
                    <TableHeader>
                        <span>Nome: </span>
                        <span>Email do responsável: </span>
                    </TableHeader>
                    {data.map((aluno, index) => (
                        <TableContent 
                            key={index} 
                            className={selectedIndices.has(index) ? 'active' : ''}
                            onClick={() => handleTableContentClick(index)}>
                            <span>{aluno.nome}</span>
                            <span>{aluno.email}</span>
                        </TableContent>
                    ))}
                </TableWrapper>
                <ButtonWrapper>
                    <button 
                        disabled={isDisabled}
                        onClick={() => history('/confirmar-falta')}
                    >
                    LANÇAR FALTA(S)
                    </button>
                </ButtonWrapper>
            </Content>
        </Container>
    );
}