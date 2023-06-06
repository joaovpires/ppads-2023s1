import React, { createContext, useState, useContext, ReactElement } from 'react';

interface ITurmaProvider {
    children: React.ReactNode;
}

interface ITurmaContext {
    setSelectedTurma: (value: string) => void;
    selectedTurma: string;
}

export const TurmaContext = createContext<ITurmaContext>({} as ITurmaContext);

export const useTurmaContext = (): ITurmaContext => {
    const context = useContext(TurmaContext);
    if (!context) {
        throw new Error('Erro no contexto');
    }
    return context;
}

export const TurmaProvider = ({ children }: ITurmaProvider): ReactElement<ITurmaProvider> => {
  const [selectedTurma, setSelectedTurma] = useState<string>('');

  return (
    <TurmaContext.Provider value={{ 
        setSelectedTurma, 
        selectedTurma 
    }}
    >
      {children}
    </TurmaContext.Provider>
  );
};