import { useContext, useState } from "react";
import { RecordContext } from "../store/recordContext";
import { useMutation } from "@apollo/client";
import MOVE_RECORD from "../queries/moveRecord";
import client from "../lib/graphql";

const CategoryMonth = ({ month, category }) => {
  const { setRecord, record } = useContext(RecordContext);
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [moveRecord, { loading, error }] = useMutation(MOVE_RECORD);

  const recordSelected =
    record && record.categoryID === category.id && record.month === month.name;

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    const draggedRecord = event.dataTransfer.getData("text/plain");
    setMoveRecord({
      recordID: parseInt(JSON.parse(draggedRecord).id),
      categoryID: parseInt(category.id),
      month: month.name
    })
    setIsDraggingOver(false);
  };

  const setMoveRecord = async (variables) => {
    try {
      await moveRecord({ variables });
      client.refetchQueries({include: 'all'})
    } catch (e) {
      console.error(e);
    }
  }

  const handleDragEnter = () => {
    setIsDraggingOver(true);
  };

  const handleDragLeave = () => {
    setIsDraggingOver(false);
  };

  return (
    <td
      onClick={() =>
        setRecord({
          month: month.name,
          categoryID: category.id,
          value: month.value,
          name: category.name,
        })
      }
      key={month.name}
    >
      {recordSelected ? (
        <div
          className="bg-blue-200 h-full w-full px-6 py-4 transition duration-150 ease-out "
        >
          {month.value ? `$${month.value}` : "-"}
        </div>
      ) : (
        <div
          className={`${
            isDraggingOver && !recordSelected ? "bg-green-200" : "bg-white"
          } ${
            recordSelected && "bg-blue-200"
          } h-full w-full px-6 py-4 transition duration-150 ease-out hover:bg-gray-100 cursor-pointer`}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {month.value ? `$${month.value}` : "-"}
        </div>
      )}
    </td>
  );
};

export default CategoryMonth;
