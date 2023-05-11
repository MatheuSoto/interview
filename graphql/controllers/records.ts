import { dbConnect, dbUpdate } from "../lib/dbConntect";

class RecordsController {
  async getRecords(categoryID, month) {
    const recordsDB = dbConnect('records')
    return recordsDB.filter(record => record.category_id === categoryID && record.month === month)
  }

  async moveRecord(categoryID, recordID, month ){
    const recordsDB = dbConnect('records')
    console.log(categoryID, recordID, month)
    const newRecords = recordsDB.map(record => {
      if(record.id === recordID){
        return {
          ...record,
          category_id: categoryID,
          month: month
        }
      }
      return record
    })
    dbUpdate(newRecords)
    return true
  }
}

export default RecordsController;
