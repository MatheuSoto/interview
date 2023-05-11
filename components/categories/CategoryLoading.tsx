const CategoryLoading = () => {
  return (
    <tr className="border-b border-gray-200 dark:border-gray-700">
      <td className="sticky left-0 pl-12 py-2 font-medium text-gray-900 whitespace-nowrap bg-gray-100 dark:text-white dark:bg-gray-800">
        <div className="animate-pulse w-20 h-2 bg-slate-200 rounded-sm"></div>
      </td>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((month) => (
        <td className="px-6 py-4 hover:bg-gray-100 cursor-pointer" key={month}>
        <div className="animate-pulse w-12 h-2 bg-slate-200 rounded-sm"></div>
        </td>
      ))}
    </tr>
  );
};
export default CategoryLoading;
