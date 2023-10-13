import { User } from "@/models/user";
import { useId } from "react";



export function UserTableRow({ user }: { user: User }) {
  return (
    <tr className="even:bg-blue-50 bg-blue-200 text-gray-900" key={useId()}>
      <td className="p-2 whitespace-nowrap">
        <div className="text-primary-500 text-left">
          {user?.name}
          <button className="p-0.5 bg-cyan-300 text-sm rounded mx-0.5">
            edit
          </button>
        </div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-primary-500 text-left">
          {user?.email}
          <button className="p-0.5 bg-cyan-300 text-sm rounded mx-0.5">
            edit
          </button>
        </div>
      </td>
    </tr>
  );
}
