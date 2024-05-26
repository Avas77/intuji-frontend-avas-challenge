import { IUsersResponse } from "../interfaces/IUsersResponse";

export const getFilteredusers = (users: IUsersResponse[], tab: string) => {
  if (users?.length === 0) return [];
  if (tab === "all") return users;
  if (tab === "teams")
    return users.filter((user) => user.usergroup.toLowerCase() === "teams");
  return users.filter((user) => user.usergroup.toLowerCase() === "members");
};
