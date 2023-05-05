const CategoryError = () => {
  return (
    <tr className="border-b border-gray-200 dark:border-gray-700">
      <td
        className="sticky left-0 pl-12 py-2 font-medium text-gray-900 whitespace-nowrap bg-gray-100 dark:text-white dark:bg-gray-800"
      >
        <div className="text-red-600 flex items-center">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11.001 10h2v5h-2zM11 16h2v2h-2z"></path>
            <path d="M13.768 4.2C13.42 3.545 12.742 3.138 12 3.138s-1.42.407-1.768 1.063L2.894 18.064a1.986 1.986 0 0 0 .054 1.968A1.984 1.984 0 0 0 4.661 21h14.678c.708 0 1.349-.362 1.714-.968a1.989 1.989 0 0 0 .054-1.968L13.768 4.2zM4.661 19 12 5.137 19.344 19H4.661z"></path>
          </svg>
          <div className="text-sm ml-2">Server Error</div>
        </div>
      </td>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((month) => (
        <td className="px-6 py-4 bg-gray-100 cursor-pointer" key={month}>
        </td>
      ))}
    </tr>
  );
};

export default CategoryError;
