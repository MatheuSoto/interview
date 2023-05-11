import CategoryMonth from "./CategoryMonth";
import { ICategory } from "./types";

interface ICategoryProps{
  category: ICategory
}

const Category = ({ category }: ICategoryProps) => {
  return (
    <tr
      className="border-b border-gray-200 dark:border-gray-700"
      key={category.name}
    >
      <td className="sticky left-0 pl-12 py-2 font-medium text-gray-900 whitespace-nowrap bg-gray-100 dark:text-white dark:bg-gray-800">
        {category.name}
      </td>
      {category.months &&
        category.months.map((month) => <CategoryMonth key={JSON.stringify(month)} category={category} month={month} />)}
    </tr>
  );
};

export default Category;
