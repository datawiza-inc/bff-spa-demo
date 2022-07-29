import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../actions/postsActions";

const UserHeader = ({ user }) => {

  if(!user) {
    return null;
  }

  return (
    <div className="header">
      {user.name}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const user = state.users.find(user => user.id === ownProps.userId)
  return {user}
}

const mapDispatchToProps = {
  fetchUser
}

export default connect(mapStateToProps, mapDispatchToProps)(UserHeader)