import { useState } from "react";
import ChevronDown from "../icons/ChevronDown";
import { useQuery } from "@apollo/client";
import GET_TYPE_MONTHS from "../queries/typeMonths";
import CategoriesList from "./CategoriesList";
import CategoryError from "./CategoryError";
import CategoryLoading from "./CategoryLoading";

interface ITableSection {
  name: string;
}

const TableSection = ({ name }: ITableSection) => {
  const [showCategories, setShowCategories] = useState(false);
  const {
    loading,
    error,
    data,
  } = useQuery(GET_TYPE_MONTHS(name));

  if(error) return <CategoryError />
  if(loading) return <CategoryLoading />
  return (
    <>
      <tr className="border-b border-gray-200 dark:border-gray-700">
        <th
          scope="row"
          className="sticky left-0 px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
        >
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setShowCategories(!showCategories)}
          >
            <div
              className={`${
                showCategories && "rotate-180"
              } ease-in duration-15 transition`}
            >
              <ChevronDown />
            </div>
            <span className="pl-2">{name}</span>
          </div>
        </th>
        {data &&
          data.sectionMonths.map((month) => (
            <td className="px-6 py-4 bg-gray-50" key={month.name}>
              {month.value !== 0 ? `$${month.value}` : "-"}
            </td>
          ))}
      </tr>
      {showCategories && <CategoriesList name={name} />}
    </>
  );
};

export default TableSection;
