import { User } from "@/models/user";
import { useId } from "react";
import EditableInput from "@/components/UserData/EditableInput";
import { useUsers } from "@/store/usersContext";
export function UserTableRow({ user }: { user: User }) {
  const { deleteUser, updateUser } = useUsers();

  function deleteUserButtonOnClick() {
    deleteUser(user.id);
  }

  function userNameOnUpdate(value: string) {
    updateUser({ ...user, name: value });
  }

  function emailOnUpdate(value: string) {
    updateUser({ ...user, email: value });
  }

  return (
    <tr className="even:bg-blue-200 bg-blue-300 text-gray-900" key={useId()}>
      <td className="p-2 whitespace-nowrap">
        <EditableInput
          value={user.name}
          onUpdate={userNameOnUpdate}
        ></EditableInput>
      </td>
      <td className="p-2 whitespace-nowrap">
        <EditableInput
          value={user.email}
          onUpdate={emailOnUpdate}
        ></EditableInput>
      </td>
      <td>
        <button
          onClick={deleteUserButtonOnClick}
          className="bg-white text-red-500 p-0.5 text-xxs rounded"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
