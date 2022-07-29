import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';
import { useAuth } from '../../context/AuthContext';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  container: {
    margin: '50px 0',
    width: 'auto',
  }
});

const Profile = () => {
  const {user} = useAuth();
  const classes = useStyles();

  const ProfileTable = () => {
    return (
      <TableContainer component={Paper} className={classes.container}>
        {
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell >Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">First name</TableCell>
                <TableCell align="right">Last name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow >
                  <TableCell component="th" scope="row">
                    {user.username}
                  </TableCell>
                  <TableCell align="right">{user.email}</TableCell>
                  <TableCell align="right">{user.firstName}</TableCell>
                  <TableCell align="right">{user.lastName}</TableCell>
                </TableRow>
            </TableBody>
          </Table>
        }

      </TableContainer>
    )
  }

  return (
    <div className={classes.mainContainer}>
      <h2>Profile</h2>
      <ProfileTable />
    </div>

  )
}

export default Profile;