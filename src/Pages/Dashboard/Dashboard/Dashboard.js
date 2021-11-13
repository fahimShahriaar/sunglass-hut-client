import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Orders from '../Orders/Orders';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,

    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';

import Pay from '../Pay/Pay';
import AddProducts from '../AddProducts/AddProducts';
import ManageAllOrders from '../ManagAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import Review from '../Review/Review';
import useAuth from '../../../hooks/useAuth';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';


const drawerWidth = 200;

function Dashboard(props) {
    const { user, logout, admin } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Link to='/home' style={{ textDecoration: "none", color: "black" }}><Button color="inherit">Home</Button></Link><br />
            <Link to='/products' style={{ textDecoration: "none", color: "black" }}><Button color="inherit">Products</Button></Link><br />
            <Link to={`${url}/myOrders`} style={{ textDecoration: "none", color: "black" }}><Button color="inherit">My Orders</Button></Link><br />
            <Link to={`${url}/pay`} style={{ textDecoration: "none", color: "black" }}><Button color="inherit">Payment</Button></Link><br />
            <Link to={`${url}/review`} style={{ textDecoration: "none", color: "black" }}><Button color="inherit">Reviews</Button></Link><br />
            {admin && <Box>
                <Divider />
                <Link to={`${url}/addProducts`} style={{ textDecoration: "none", color: "black" }}><Button color="inherit">Add Product</Button></Link><br />
                <Link to={`${url}/manageAllOrder`} style={{ textDecoration: "none", color: "black" }}><Button color="inherit">Manage Order</Button></Link><br />
                <Link to={`${url}/manageProducts`} style={{ textDecoration: "none", color: "black" }}><Button color="inherit">Manage Products</Button></Link><br />
                <Link to={`${url}/makeAdmin`} style={{ textDecoration: "none", color: "black" }}><Button color="inherit">Make Admin</Button></Link><br />
            </Box>}
            {user?.email && <Button onClick={logout} color="inherit">Log out</Button>}


        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar style={{ backgroundColor: '#1D2323' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />


                <Switch>
                    <Route exact path={path}>
                        <Orders></Orders>
                    </Route>

                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <Orders></Orders>
                    </Route>
                    <AdminRoute path={`${path}/addProducts`}>
                        <AddProducts></AddProducts>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageAllOrder`}>
                        <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>

                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
