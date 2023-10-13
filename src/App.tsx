import { useEffect } from "react";
import { useUsers } from "@/store/usersContext";
import { useUserFilter } from "@/hooks/useUserFilter";
// import DeleteIcon from "@/components/Icons/DeleteIcon.tsx";
import { UsersTable } from "@/components/UserData/UsersTable";

function App() {
  const { users, fetchUsers, deleteUser } = useUsers();
  const { filteredData, setFilters, filters } = useUserFilter(users.data);

  function inputOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFilters({ ...filters, [event.target.name]: event.target.value });
  }

  function deleteUserButtonOnClick(id: number) {
    deleteUser(id);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="lg:px-12 max-w-3xl mx-auto">
      <form className="flex gap-4 py-2 flex-wrap">
        <div>
          <p>username</p>
          <input type="text" name="userName" onChange={inputOnChange} />
        </div>
        <div>
          <p>email</p>
          <input type="text" name="email" onChange={inputOnChange} />
        </div>
      </form>
      <UsersTable users={filteredData} loading={users.pending} />
    </div>
  );
}

export default App;
