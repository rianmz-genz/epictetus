import React, { FC } from "react";

interface ProfileProps {
  name: string;
}
const Profile: FC<ProfileProps> = ({ name }) => {
  return (
    <div className="flex items-center justify-center lg:justify-start ">
      <div className="w-8 h-8 shadow-lg flex items-center justify-center rounded-lg mr-4 bg-gray-600">E</div>
      {name}
    </div>
  );
};

export default Profile;
