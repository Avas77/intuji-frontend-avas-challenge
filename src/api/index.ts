import { IUsersResponse } from "../interfaces/IUsersResponse";
import supabase from "../utils/supabase";

export const getUsers = async (): Promise<IUsersResponse[] | null> => {
  const { data } = await supabase.from("users").select();
  return data;
};
