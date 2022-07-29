import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React, { useState } from 'react';
import { API_BASE_URL } from '../../common/constants';
import Loading from '../../components/Loading/Loading';
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

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);
  const {login, isAuthenticated, isLoading} = useAuth();
  const classes = useStyles();

  const getDoctors = async () => {

    const API = API_BASE_URL + '/api/doctors'
    const params = {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
      credentials: "include"
    };
    try {
      setLoading(true);
      const res = await fetch(API, params)
      console.log('get doctors through api', res)
      if(res.status >= 400 && res.status <= 500) {
        login();
      } 
      setDoctors((await res.json()).data)
      setLoading(false);

    } catch (e) {
      console.error(e)
    }
  }

  const DoctorTable = () => {
    return (
      <TableContainer component={Paper} className={classes.container}>
        {
          loading ? <Loading /> : <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell >Name</TableCell>
                <TableCell align="right">Age</TableCell>
                <TableCell align="right">Occupation</TableCell>
                <TableCell align="right">Hospital</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {doctors.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.age}</TableCell>
                  <TableCell align="right">{row.occupation}</TableCell>
                  <TableCell align="right">{row.hospital}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        }

      </TableContainer>
    )
  }

  return (
    <div className={classes.mainContainer}>
      <h2>Doctor List</h2>
      <Button variant="contained" color="primary" onClick={getDoctors}>Call Backend API</Button>
      <DoctorTable />
    </div>

  )
}

export default Doctors;