import React, { useState } from "react";
import { Typography } from "@mui/material";
import { UserAvatar1 } from "../../../image-comps/userAvatars";
import { ReactComponent as EditIcon } from "../../../assets/editIcon.svg";

const AvatarUpload = () => {
  const [avatar, setAvatar] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <Typography component={"div"} className="editAvatar">
        <Typography component={"span"} className="avatar">
          {avatar ? (
            <img src={avatar} alt="Avatar" className="avatarPreview" />
          ) : (
            <UserAvatar1 />
          )}
        </Typography>
        <Typography component={"span"} className="editIcon">
          <label htmlFor="avatar-upload">
            <EditIcon />
          </label>
          <input
            id="avatar-upload"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </Typography>
      </Typography>
    </div>
  );
};

export default AvatarUpload;
