import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../api";
import QualitiesList from "./qualitiesList";
import { useNavigate } from "react-router-dom";

const UserPage = ({ userId }) => {
  const history = useNavigate();
  const [user, setUser] = useState();
  useEffect(() => {
    api.users.getById(userId).then((data) => setUser(data));
  });

  const handleClick = () => {
    history("/users");
  };

  if (user) {
    return (
      <div>
        <h1>{user.name}</h1>
        <h2>Profession: {user.profession.name}</h2>
        <QualitiesList qualities={user.qualities} />
        <h2>Completed meetings: {user.completedMeetings}</h2>
        <h2>Rate: {user.rate}</h2>
        <button onClick={handleClick}> All users</button>
      </div>
    );
  } else {
    return <h1>Loading userPage</h1>;
  }
};

UserPage.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default UserPage;
