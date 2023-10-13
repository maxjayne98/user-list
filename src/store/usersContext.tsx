import { createContext, useReducer, useContext, Dispatch } from "react";
import { getUsers } from "@/services/users";
import { User } from "@/models/user";

const initialState = { data: null, pending: false };

type ACTIONTYPE =
  | { type: "SET_USERS"; payload: Array<User> }
  | { type: "UPDATE_REQUEST_STATUS"; payload: boolean }
  | { type: "GET_USERS" };

const UserContext = createContext<{
  users: StateType;
  fetchUsers: () => Promise<void>;
  dispatch: Dispatch<ACTIONTYPE>;
} | null>(null);

interface Props {
  children: JSX.Element;
}

type StateType = {
  data: Array<User> | null;
  pending: boolean;
};

function userReducer(state: StateType, action: ACTIONTYPE) {
  switch (action.type) {
    case "GET_USERS": {
      return state;
    }
    case "SET_USERS": {
      return { ...state, data: action?.payload };
    }
    case "UPDATE_REQUEST_STATUS": {
      return { ...state, pending: action?.payload };
    }
    default: {
      throw new Error(`Unhandled action : ${action}`);
    }
  }
}

async function fetchUsers(dispatch: Dispatch<ACTIONTYPE>) {
  dispatch({ type: "UPDATE_REQUEST_STATUS", payload: true });
  try {
    const payload = await getUsers();
    dispatch({ type: "SET_USERS", payload });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("fetchUser ~ error", error);
  } finally {
    dispatch({ type: "UPDATE_REQUEST_STATUS", payload: false });
  }
}

function UsersProvider({ children }: Props): JSX.Element {
  const [users, dispatch] = useReducer(userReducer, initialState);
  const value = {
    users,
    dispatch,
    fetchUsers: () => fetchUsers(dispatch),
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

function useUsers() {
  const context = useContext(UserContext);
  if (context === null) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}

export { UsersProvider, useUsers };
