import UserBox from "../UserBox";
import { useQuery } from "react-query";
import { getUsers } from "../../api";
import { useTabsContext } from "../../hooks/useTabsContext";
import { getFilteredusers } from "../../utils/getFilteredUsers";

interface IUserBoxGroupProps {
  name: string;
}

const UserBoxGroup = ({ name }: IUserBoxGroupProps) => {
  const { activeTab } = useTabsContext();
  const {
    data: users,
    isLoading,
    isError,
  } = useQuery(`users ${name}`, () => getUsers(name));

  if (isLoading) return <div className="pl-6 pt-4">Loading...</div>;
  if (isError) return <div>Something went wrong.</div>;
  const filteredUsers = users ? getFilteredusers(users, activeTab) : [];
  return (
    <>
      {filteredUsers.map((user) => {
        return (
          <UserBox
            key={user.id}
            imgSrc={user.imgpath}
            username={user.name}
            group={user.usergroup}
            activeStatus={user.status}
          />
        );
      })}
    </>
  );
};

export default UserBoxGroup;
