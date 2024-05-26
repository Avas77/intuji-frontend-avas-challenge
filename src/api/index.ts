import { IUsersResponse } from "../interfaces/IUsersResponse";
import supabase from "../utils/supabase";

export const getUsers = async (
  name: string
): Promise<IUsersResponse[] | null> => {
  const { data } = await supabase
    .from("users")
    .select()
    .ilike("name", `%${name}%`);
  return data;
};
