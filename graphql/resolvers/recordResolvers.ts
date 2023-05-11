import RecordsController from "../controllers/records";

const recordsController = new RecordsController();
const recordResolvers = {
  Query: {
    async records(arent, args) {
      const { categoryID, month } = args;
      return recordsController.getRecords(categoryID, month);
    }
  },
  Mutation: {
    moveRecord: (_, { categoryID, recordID, month }) => {
      return recordsController.moveRecord(categoryID, recordID, month);
    },
  }
};

export default recordResolvers;
