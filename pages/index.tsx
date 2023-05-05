import Sidebar from "../components/Sidebar";
import TableSection from "../components/TableSection";
import TableSectionCalc from "../components/TableSectionCalc";
import { monthsDB } from "../db/months";

export default function Home() {
  return (
    <div>
      <Sidebar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-4xl">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-400">
              <tr className="border-b">
                <th scope="col" className="px-6 py-3 left-0 sticky bg-white">
                  <h1 className="text-lg whitespace-nowrap">
                    Financial Report
                  </h1>
                </th>
                {monthsDB.map((month) => (
                  <th key={month} scope="col" className="px-6 py-3 ">
                    {month}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <TableSection name="Banks" />
              <TableSection name="Income" />
              <TableSection name="COGS" />
              <TableSectionCalc name="Gross Profit" queryName="grossProfit" />
              <TableSection name="Expenses" />
              <TableSectionCalc name="Net Income" queryName="netIncome" />
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
