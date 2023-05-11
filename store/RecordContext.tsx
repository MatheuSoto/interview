import React, { createContext, useState } from 'react';

interface RecordContextType {
  record: RecordSelected | null;
  setRecord: React.Dispatch<React.SetStateAction<RecordSelected | null>>;
}

interface RecordSelected {
  categoryID: number
  value: number
  month: string
  name: string
}

export const RecordContext = createContext<RecordContextType>({
  record: null,
  setRecord: () => {}
});

export const RecordProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [record, setRecord] = useState<RecordSelected | null>(null);

  return (
    <RecordContext.Provider value={{ record, setRecord }}>
      {children}
    </RecordContext.Provider>
  );
};