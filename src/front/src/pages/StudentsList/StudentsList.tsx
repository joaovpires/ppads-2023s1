import { useLocation } from "react-router-dom";
import { StudentsTable } from "../../components/StudentsTable/StudentsTable";
import { useTurmaContext } from "../../contexts/turma-context";

export const StudentsList: React.FC = () => {
    const { selectedTurma } = useTurmaContext();
    const { state } = useLocation();

    return (
        <StudentsTable periodo={state.period} turma={selectedTurma} materia={state.subject}/>
    )
};