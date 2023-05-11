const Record = ({ record }) => {
  const handleDragStart = (event) => {
    event.dataTransfer.setData("text/plain", JSON.stringify(record));
  };

  return (
    <div draggable onDragStart={handleDragStart}>
      <div className="flex justify-between items-center px-4 py-4 border-b text-gray-600 transition-colors duration-300 transform dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 cursor-move">
        <div className="text-sm">
          <div className="text-xs text-gray-400">{record.date}</div>
          <div className="text-md font-bold">{record.name}</div>
          <div className="text-xs text-gray-400">{record.description}</div>
        </div>
        <div className="text-sm">${record.amount}</div>
      </div>
    </div>
  );
};

export default Record;
