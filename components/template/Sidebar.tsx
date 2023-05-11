import { useContext } from "react";
import { RecordContext } from "../../store/RecordContext";
import CategorySidebar from "../categories/CategorySidebar";

const Sidebar = () => {
  const { record } = useContext(RecordContext);

  return (
    <aside className="flex flex-col w-64 h-screen fixed right-0 overflow-y-auto bg-white border-l rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
      {record ? (
        <div className="flex flex-col justify-between flex-1 ">
          <nav>
            <CategorySidebar />
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
