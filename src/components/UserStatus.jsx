const UserStatus = (props) => {
  if (props.loggedIn && props.isAdmin) {
    return <div>Welcome admin</div>;
  } else {
    return <div>Welcome user</div>;
  }
};

export default UserStatus;
