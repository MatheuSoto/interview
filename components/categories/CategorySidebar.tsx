import { useContext } from "react";
import RecordsList from "../records/RecordsList";
import { RecordContext } from "../../store/RecordContext";
import { useQuery } from "@apollo/client";
import GET_CATEGORY from "../../queries/category";

const CategorySidebar = () => {
  const { record } = useContext(RecordContext);
  
  const { data } = useQuery(GET_CATEGORY, {
    variables: { id: record.categoryID, month: record.month },
    fetchPolicy: 'network-only'
  });

  return (
    <div>
      <div className="text-md px-4 py-2 border-b items-center bg-gray-100 text-gray-700  flex justify-between dark:text-gray-400">
        <div>
          <div className="text-xs text-gray-400">
            {record.month} 2022
          </div>
          <div className="font-bold">{record.name}</div>
        </div>
        {data && <div>${data.category}</div>}
      </div>
      <RecordsList record={record} />
    </div>
  );
};

export default CategorySidebar
