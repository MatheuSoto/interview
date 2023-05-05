import { useQuery } from "@apollo/client";
import GET_TYPE_MONTHS from "../queries/typeMonths";
import GET_CALC from "../queries/getCalc";
import CategoryError from "./CategoryError";
import CategoryLoading from "./CategoryLoading";

interface ITableSection {
  name: string;
  queryName: string
}

const TableSectionCalc = ({ name, queryName }: ITableSection) => {
  const {
    loading,
    error,
    data,
  } = useQuery(GET_CALC(queryName));

  const formatNumber = number => {
    if(number < 0) return `- $${Math.abs(number)}`;
    return `$${number}`
  }

  if(error) return <CategoryError />
  if(loading) return <CategoryLoading />
  return (
    <>
      <tr className="border-b border-gray-200 dark:border-gray-700">
        <th
          scope="row"
          className="sticky left-0 px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-blue-50 dark:text-white dark:bg-gray-800"
        >
            <span className="pl-2">{name}</span>
        </th>
        {data &&
          data.getCalcs.map((month) => (
            <td className="px-6 py-4 bg-blue-50 whitespace-nowrap" key={month.name}>
              {month.value !== 0 ? formatNumber(month.value) : "-"}
            </td>
          ))}
      </tr>
    </>
  );
};

export default TableSectionCalc;
