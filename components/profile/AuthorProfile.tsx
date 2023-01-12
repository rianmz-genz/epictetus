import React, { FC } from "react";
interface AuthorProfileProps {
  imageAuthor?: string;
  authorName?: string;
  categoryAuthor?: string;
}
const AuthorProfile: FC<AuthorProfileProps> = ({
  imageAuthor,
  authorName,
  categoryAuthor,
}) => {
  return (
    <div className="flex items-center">
      <img src={imageAuthor} alt="image" />
      <div className="ml-3">
        <p>{authorName}</p>
        <p className="text-gray-400 text-sm">{categoryAuthor}</p>
      </div>
    </div>
  );
};

export default AuthorProfile;
