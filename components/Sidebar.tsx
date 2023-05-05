import { useContext } from "react";
import { RecordContext } from "../store/recordContext";
import RecordsList from "./RecordsList";

const Sidebar = () => {
  const { record } = useContext(RecordContext);

  return (
    <aside className="flex flex-col w-64 h-screen fixed right-0 overflow-y-auto bg-white border-l rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
      {record ? (
        <div className="flex flex-col justify-between flex-1 ">
          <nav>
            <div>
              <div className="text-md px-4 py-2 border-b items-center bg-gray-100 text-gray-700  flex justify-between dark:text-gray-400">
                <div>
                  <div className="text-xs text-gray-400">{record.month} 2022</div>
                  <div className="font-bold">{record.name}</div>
                </div>
                <div>${record.value}</div>
              </div>
              <RecordsList record={record}  />
            </div>
          </nav>
        </div>
      ) : (
        <div className="h-screen w-full flex items-center justify-center text-gray-400">
          Seleccione un registro
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
