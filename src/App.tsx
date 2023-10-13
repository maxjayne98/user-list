import { useEffect } from "react";
import { useUsers } from "@/store/usersContext";
import { useUserFilter } from "@/hooks/useUserFilter";
// import DeleteIcon from "@/components/Icons/DeleteIcon.tsx";
import { UsersTable } from "@/components/UserData/UsersTable";
import Input from "./components/Base/Input";

function App() {
  const { users, fetchUsers } = useUsers();
  const { filteredData, setFilters, filters } = useUserFilter(users.data);

  function inputOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFilters({ ...filters, [event.target.name]: event.target.value });
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="lg:px-12 max-w-3xl mx-auto">
      <form className="flex gap-4 py-2 flex-wrap items-end">
        <Input
          type="text"
          name="userName"
          label="username"
          onChange={inputOnChange}
          data-cy="username-input"
        />

        <Input
          type="text"
          name="email"
          label="email"
          onChange={inputOnChange}
          data-cy="email-input"
        />
        <button
          onClick={fetchUsers}
          type="button"
          className="bg-gray-400 text-white rounded px-1"
          data-cy="reset-btn"
        >
          reset
        </button>
      </form>
      <UsersTable users={filteredData} pending={users.pending} />
    </div>
  );
}

export default App;
