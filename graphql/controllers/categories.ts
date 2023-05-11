import { monthsDB } from "../../helpers/months";
import { dbConnect } from "../lib/dbConntect";

class CategoriesController {
  async getCategory(id: number, month: string) {
    const categoriesDB = dbConnect("categories");
    const recordsDB = dbConnect("records");
    const findCategory = categoriesDB.find((category) => category.id === id);
    const amount =
      recordsDB
        .filter(
          (record) =>
            record.month === month && record.category_id === findCategory.id
        )
        .reduce((accumulator, current) => accumulator + current.amount, 0) || 0;
    return amount
  }

  async getCategories(type: string = "Expenses") {
    const categoriesDB = dbConnect("categories");
    const recordsDB = dbConnect("records");
    const newCategories = categoriesDB
      .filter((category) => category.type === type)
      .map((category) => {
        return {
          ...category,
          months: monthsDB.map((month) => {
            return {
              name: month,
              amount:
                recordsDB
                  .filter(
                    (record) =>
                      record.month === month &&
                      record.category_id === category.id
                  )
                  .reduce(
                    (accumulator, current) => accumulator + current.amount,
                    0
                  ) || 0,
            };
          }),
        };
      });
    return newCategories;
  }

  async sectionMonths(sectionName: string = "Expenses") {
    const categoriesDB = dbConnect("categories");
    const recordsDB = dbConnect("records");

    const categoriesFiltered = categoriesDB.filter(
      (category) => category.type === sectionName
    );
    const currentRecords = recordsDB.filter((record) =>
      categoriesFiltered.some((category) => category.id === record.category_id)
    );

    return monthsDB.map((month) => ({
      name: month,
      amount:
        currentRecords
          .filter((expense) => expense.month === month)
          .reduce((accumulator, current) => accumulator + current.amount, 0) ||
        0,
    }));
  }

  async getCalcs(name: string) {
    const income = await this.sectionMonths("Income");
    const cogs = await this.sectionMonths("COGS");
    const grossProfit = monthsDB.map((month) => {
      const monthIncome =
        income.find((record) => record.name === month)?.amount || 0;
      const montCOGS =
        cogs.find((record) => record.name === month)?.amount || 0;
      return {
        name: month,
        amount: monthIncome - montCOGS,
      };
    });
    if (name === "grossProfit") return grossProfit;
    const expenses = await this.sectionMonths("Expenses");
    const netIncome = monthsDB.map((month) => {
      const monthGrossProfit =
        grossProfit.find((record) => record.name === month)?.amount || 0;
      const monthExpense =
        expenses.find((record) => record.name === month)?.amount || 0;
      return {
        name: month,
        amount: monthGrossProfit - monthExpense,
      };
    });
    if (name === "netIncome") return netIncome;
    return [];
  }
}

export default CategoriesController;
