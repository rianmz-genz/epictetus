import React, { FC } from "react";
import { useRouter } from 'next/router';

interface ProfileProps {
  name: string;
}
const Profile: FC<ProfileProps> = ({ name }) => {
  const router = useRouter()
  return (
    <div onClick={()=> {
      router.push('/')
    }} className="cursor-pointer flex items-center justify-center lg:justify-start ">
      <div className="w-8 h-8 shadow-lg flex items-center justify-center rounded-lg lg:mr-4 mr-1 bg-gray-600">E</div>
      {name}
    </div>
  );
};

export default Profile;
