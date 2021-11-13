import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const Orders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    //get products
    useEffect(() => {

        fetch("https://polar-island-04208.herokuapp.com/orders")
            .then(res => res.json())
            .then(data => {
                const service = data.filter(data => data.email === user.email);

                setOrders(service)
                // console.log(service);
            });
    }, [user.email])


    //Delete order
    const handleDeleteOrder = id => {
        // console.log(id);
        const proceed = window.confirm('Are you sure, you want to delete?')
        if (proceed) {
            const url = `https://polar-island-04208.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);
                    }
                })

        }

    }
    return (
        <div>
            <h2>My Orders {orders.length}</h2>
            <hr className="w-25 mx-auto mb-5 text-dark " />
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Client-Name</TableCell>
                            <TableCell align="right">Product-Name</TableCell>
                            <TableCell align="right">email</TableCell>
                            <TableCell align="right">Action</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.clientName}
                                </TableCell>
                                <TableCell align="right">{row.serviceName}</TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right"><Button onClick={() => handleDeleteOrder(row._id)} style={{ backgroundColor: 'rgba(29, 29, 29, 0.849)', color: 'white' }} >Cancel</Button></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    );
};

export default Orders;