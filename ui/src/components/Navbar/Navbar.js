import { Button, Popover } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { useAuth } from "../../context/AuthContext";

const useStyles = makeStyles({
  userAvatarContainer: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer'
  },
  userAvatar: {
    background: '#f56a00',
    padding: '10px',
    margin: '10px',
    borderRadius: '50%',
    color: 'white',
  },
  loginBtn: {
    margin: '10px'
  },
  userMenu: {
    padding: '10px 40px',
    cursor: 'pointer'
  }
});

const Navbar = () => {
  const { user, isAuthenticated, login, logout } = useAuth()
  const classes = useStyles();

  const UserAvatar = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const getShortenUserName = () => {
      return user ? user.firstName[0].toUpperCase() + user.lastName.substring(0,1).toUpperCase() : '';
    }

    return (
      <div >
        <div onClick={handleClick} className={classes.userAvatarContainer}>
          <div className={classes.userAvatar}>{getShortenUserName()}</div>
          <i className="dropdown icon" ></i>
        </div>
        
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
  
        >
          <div className={classes.userMenu} onClick={logout}>Logout</div>
        </Popover>
      </div>
    )
  }

  return (
    <div className="ui fixed borderless huge menu">
      <div className="ui container grid">
        <div className="only row">
          <a className="header item">Datawiza SPA Demo</a>
          <NavLink className={`${(isActive) => isActive ? 'active' : ''} item`} to='/'>Home</NavLink>
          <NavLink className={`${(isActive) => isActive ? 'active' : ''} item`} to='/doctors'>Doctors</NavLink>
          <NavLink className={`${(isActive) => isActive ? 'active' : ''} item`} to='/posts'>Posts</NavLink>
          <NavLink className={`${(isActive) => isActive ? 'active' : ''} item`} to="/profile">Profile</NavLink>

          <div className="right menu">
            {isAuthenticated ? <UserAvatar /> : <Button className={classes.loginBtn} variant="contained" color="primary" onClick={login}>Login</Button>}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar