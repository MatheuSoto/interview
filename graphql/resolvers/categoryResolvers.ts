import CategoriesController from "../controllers/categories";

const categoryController = new CategoriesController()
const categoryResolvers = {
  Query: {
    async categories(arent, args, ) {
      return categoryController.getCategories(args?.type)
    },
    async sectionMonths(arent, args) {
      return categoryController.sectionMonths(args?.name)
    },
    async getCalcs(arent, args) {
      return categoryController.getCalcs(args?.name)
    },
    async category(arent, args) {
      return categoryController.getCategory(args?.id, args?.month)
    },
  },
};

export default categoryResolvers;
