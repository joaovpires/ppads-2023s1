import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { StudentsList } from './pages/StudentsList/StudentsList';
import { TurmaProvider } from './contexts/turma-context';
import { AbscenceConfirmation } from './pages/AbscenceConfirmation/AbscenceConfirmation';

function App() {
  return (
    <TurmaProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lista-alunos" element={<StudentsList />} />
          <Route path="/confirmar-falta" element={<AbscenceConfirmation />} />
        </Routes>
      </BrowserRouter>
    </TurmaProvider>
  );
}

export default App;
