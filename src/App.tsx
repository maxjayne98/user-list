import { useEffect } from "react";
import { useUsers } from "@/store/usersContext";
import { useUserFilter } from "@/hooks/useUserFilter";

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

  if (users.pending) return <div>loading!</div>;
  if (!filteredData?.length) return <div>no data!</div>;
  return (
    <>
      <form className="flex gap-4">
        <span>username</span>
        <input type="text" name="userName" onChange={inputOnChange} />
        <span>email</span>
        <input type="text" name="email" onChange={inputOnChange} />
      </form>
      <div>
        {filteredData?.map(({ username, email, id }) => (
          <div className="flex gap-4" key={username}>
            <span>{username}</span>
            <span>{email}</span>
            <button
              onClick={() => deleteUserButtonOnClick(id)}
              className="text-red-500 text-xs inline-flex items-center justify-center"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
