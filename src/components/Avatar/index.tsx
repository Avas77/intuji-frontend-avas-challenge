const Avatar = ({ src }: { src: string }) => {
  return (
    <div className="relative">
      <img src={src} alt="Avatar" className="w-10 h-10 rounded-full" />
    </div>
  );
};

export default Avatar;
