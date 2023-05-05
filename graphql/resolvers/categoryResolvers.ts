import CategoriesController from "../controllers/categories";

const categoryController = new CategoriesController()
const categoryResolvers = {
  Query: {
    async categories(arent, args, contextValue, info) {
      return categoryController.getCategories(args?.type)
    },
    async sectionMonths(arent, args, contextValue, info) {
      return categoryController.sectionMonths(args?.name)
    },
    async getCalcs(arent, args, contextValue, info) {
      return categoryController.getCalcs(args?.name)
    },
  },
};

export default categoryResolvers;
