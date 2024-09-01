type TableData = {
  id: number;
  name: string;
  email: string;
};

interface TableProps {
  data: TableData[];
}

const RegisteredUsersTable: React.FC<TableProps> = ({ data }) => {
  return (
    <table className="w-full table-auto border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-2 py-2 sm:px-4">SN</th>
          <th className="hidden border border-gray-300 px-2 py-2 sm:table-cell sm:px-4">
            Name
          </th>
          <th className="hidden border border-gray-300 px-2 py-2 sm:table-cell sm:px-4">
            Email
          </th>
          <th className="border border-gray-300 px-2 py-2 sm:hidden sm:px-4">
            Details
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td className="border border-gray-300 px-2 py-2 text-center text-xs sm:px-4 sm:text-sm md:text-base">
              {index + 1}
            </td>
            <td className="block text-wrap border border-gray-300 px-2 py-2 text-xs sm:block sm:table-cell sm:px-4 sm:text-sm">
              {item.name}
            </td>
            <td className="block text-wrap border border-gray-300 px-2 py-2 text-xs sm:block sm:table-cell sm:px-4 sm:text-sm">
              {item.email}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RegisteredUsersTable;
