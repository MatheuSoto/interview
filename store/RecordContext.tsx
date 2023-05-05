import React, { createContext, useState } from 'react';

interface RecordContextType {
  record: any | null;
  setRecord: React.Dispatch<React.SetStateAction<any>>;
}

export const RecordContext = createContext<RecordContextType>({
  record: null,
  setRecord: () => {}
});

export const RecordProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [record, setRecord] = useState<any | null>(null);

  return (
    <RecordContext.Provider value={{ record, setRecord }}>
      {children}
    </RecordContext.Provider>
  );
};