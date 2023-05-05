import records from './records.json'
import categories from './categories.json'
import fs from 'fs-extra';
import path from 'path';

const models = {
  records,
  categories
}

export const dbConnect = (model: string) => {
  return models[model]
}

export const dbUpdate = async (newRecords: string) => {
  const pathfile = path.join(process.cwd(), 'db', 'records.json');
  try {
    await fs.writeFile(pathfile, JSON.stringify(newRecords));
    console.log('El archivo se ha actualizado correctamente!');
  } catch (err) {
    console.error('Error al intentar escribir en el archivo:', err);
  }
  return true
}