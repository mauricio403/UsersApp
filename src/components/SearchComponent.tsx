import React, { useState, useEffect, ChangeEvent } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import usersApi from './../api/usersApi';
import { UserModel } from './../interfaces/usersInterface';
import { Box, TextField } from '@mui/material';

export const SearchComponent = () => {

  const [users, setUsers] = useState<UserModel[]>([]);

  const [search, setSearch] = useState('');



  const showData = async () => {
    const resp = await usersApi.get<UserModel[]>(`/users`);
    setUsers(resp.data);

  }

  const seacher = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  const results = !search ? users : users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));



  useEffect(() => {
    showData();
  }, []);


  return (
    <>

      <Box display='flex' sx={{ marginBottom: 5 }}>

        <TextField
          fullWidth
          label="Busque un nombre"
          value={search}
          onChange={seacher}

        />

      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">UserName</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">WebSite</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {results.map((user) => (
              <TableRow
                key={user.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.id}
                </TableCell>
                <TableCell align="right">{user.name}</TableCell>
                <TableCell align="right">{user.username}</TableCell>
                <TableCell align="right">{user.email}</TableCell>
                <TableCell align="right">{user.phone}</TableCell>
                <TableCell align="right">{user.website}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
