import Avatar from "../Avatar";

interface IUserBoxProps {
  imgSrc: string;
  username: string;
  activeStatus: string;
  group: string;
}

const UserBox = ({ imgSrc, username, activeStatus, group }: IUserBoxProps) => {
  return (
    <section className="flex justify-between px-6 py-4 items-center border border-gray">
      <section className="flex gap-3 items-center">
        <Avatar src={imgSrc} />
        <div>
          <p className="font-medium">{username}</p>
          <p className="text-slateGray">{activeStatus}</p>
        </div>
      </section>
      <p className="text-slateGray">{group}</p>
    </section>
  );
};

export default UserBox;
