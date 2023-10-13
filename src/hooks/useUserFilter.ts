import { User } from "@/models/user";
import { useEffect, useState } from "react";

type Filters = "email" | "userName";
const initialFilters: Record<Filters, string> = { email: "", userName: "" };

export function useUserFilter(users: Array<User> | null) {
  const [filters, setFilters] = useState(initialFilters);
  const [filteredData, setFilteredData] = useState(users);

  useEffect(() => {
    if (!users) return;
    const result = [];
    for (let index = 0; index < users.length; index++) {
      const user = users[index];
      if (
        user.email.toLowerCase().includes(filters.email.toLowerCase()) &&
        user.username.toLowerCase().includes(filters.userName.toLowerCase())
      )
        result.push(user);
    }
    setFilteredData(result);
  }, [filters, users]);

  function resetFilters() {
    setFilters(initialFilters);
  }

  return {
    filters,
    setFilters,
    resetFilters,
    filteredData,
  };
}
