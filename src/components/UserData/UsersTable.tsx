import { User } from "@/models/user";
import { UserTableRow } from "@/components/UserData/UserTableRow";

export function UsersTable({
  users,
  pending,
}: {
  users: Array<User> | null;
  pending: boolean;
}) {
  return (
    <div className="w-full relative mx-auto bg-white rounded-sm ">
      <div className="overflow-x-auto scrollbar-thin  ">
        <table className="w-full text-xs table-auto ">
          <thead className="text-gray-100 bg-blue-500 rounded-t-lg bg-secondary-500 ">
            <th className="p-2 text-sm text-bold">Username</th>
            <th className="p-2 text-sm">Email</th>
          </thead>
          <tbody className="divide-y divide-gray-100 ">
            {users?.map((user) => (
              <UserTableRow user={user} />
            ))}
          </tbody>
        </table>
        {pending ? (
          <div className="text-lg text-gray-700 text-center">Loading!</div>
        ) : undefined}
        {!users || (users.length === 0 && !pending) ? (
          <div className="text-lg text-gray-700 text-center">No Data!</div>
        ) : undefined}
      </div>
    </div>
  );
}
