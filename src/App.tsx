import { useUsers } from "@/store/usersContext";
import { useEffect } from "react";

function App() {
  const { users, fetchUsers } = useUsers();

  useEffect(() => {
    fetchUsers();
  }, []);

  if (users.pending) return <div>loading!</div>;
  if (!users.data?.length) return <div>no data!</div>;
  return (
    <div>
      {users?.data?.map(({ username, email }) => (
        <div className="flex gap-4" key={username}>
          <span>{username}</span>
          <span>{email}</span>
        </div>
      ))}
    </div>
  );
}

export default App;
