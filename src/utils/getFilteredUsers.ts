/**
 * The function `getFilteredusers` filters an array of users based on a specified tab value.
 * @param {IUsersResponse[]} users - The `users` parameter is an array of objects that should conform
 * to the `IUsersResponse` interface. Each object in the array represents a user with properties like
 * `usergroup` that indicate whether the user belongs to a team or is a member.
 * @param {string} tab - The `tab` parameter in the `getFilteredusers` function is used to determine
 * which subset of users to filter from the provided list based on their `usergroup` property. The
 * function filters the users based on whether they belong to the "teams" group or the "members" group,
 * or
 * @returns The `getFilteredusers` function returns an array of users based on the specified tab value.
 * If the tab is "all", it returns all users. If the tab is "teams", it filters and returns users whose
 * `usergroup` property is "teams". If the tab is "members", it filters and returns users whose
 * `usergroup` property is "members". If the `users`
 */
import { IUsersResponse } from "../interfaces/IUsersResponse";

export const getFilteredusers = (users: IUsersResponse[], tab: string) => {
  if (users?.length === 0) return [];
  if (tab === "all") return users;
  if (tab === "teams")
    return users.filter((user) => user.usergroup.toLowerCase() === "teams");
  return users.filter((user) => user.usergroup.toLowerCase() === "members");
};
