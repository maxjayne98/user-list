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
    <div className="w-full relative mx-auto bg-white rounded ">
      <div className="overflow-x-auto scrollbar-thin rounded  ">
        <table className="w-full text-xs table-auto ">
          <thead className="text-gray-100 bg-blue-500 rounded-t-lg bg-secondary-500 ">
            <th className="p-2 text-sm text-bold text-left">Username</th>
            <th className="p-2 text-sm text-left">Email</th>
            <th className="p-2 text-sm text-left">Actions</th>
          </thead>
          <tbody
            className="divide-y divide-gray-100 "
            data-cy="user-table-body"
          >
            {!pending &&
              users?.map((user) => <UserTableRow user={user} key={user.id} />)}
          </tbody>
        </table>
        {pending ? (
          <div className="text-lg text-gray-700 text-center" data-cy="loading">
            Loading!
          </div>
        ) : undefined}
        {users?.length === 0 && !pending ? (
          <div className="text-lg text-gray-700 text-center" data-cy="no-data">
            No Data!
          </div>
        ) : undefined}
      </div>
    </div>
  );
}
