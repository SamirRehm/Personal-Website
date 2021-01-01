import { Typography } from "@material-ui/core";
import React from "react";

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">Samir Rehmtulla</Typography>
        <Typography className="title">Software Engineer</Typography>
      </div>

      <figure className="profile_image">
        <img src="" alt="" />
      </figure>

      <div className="profile_information">
        Insert Timeline
        <br />
        <button>My button</button>
      </div>
    </div>
  );
};

export default Profile;
