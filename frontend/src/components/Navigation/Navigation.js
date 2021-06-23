import React from 'react';
import {
	AppBar,
	Toolbar,
	IconButton,
	Badge,
	MenuItem,
	Menu,
	Typography,
	CssBaseline,
	createMuiTheme,
	ThemeProvider,
} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import logo from '../../assets/ultuh.png';
import useStyles from './NavigationStyles';
import {Link, useLocation} from 'react-router-dom';

const Navigation = ({totalItems}) => {
	const theme = createMuiTheme({
		typography: {
			fontFamily: [
				'Oleo Script',
				'cursive'
			].join(',')
		}
	});

	const classes = useStyles();
	const location = useLocation();

	return (
		<>
			<CssBaseline />
			<AppBar position = 'fixed' className = {classes.appBar} color = 'inherit'>
				<Toolbar>
					<ThemeProvider theme={theme}>
					<Typography component = {Link} to = '/' variant = 'h6' className = {classes.title} color = 'inherit'>
						<img src = {logo} alt = 'Ul-Tuh Logo' height = '25px' className = {classes.image} />
						Ult-uh
					</Typography>
					</ThemeProvider>
					<div className = {classes.grow} />
					{location.pathname === '/' && (
						<div className = {classes.button}>
							<IconButton component = {Link} to = '/cart' aria-label = 'Show cart items' color = 'inherit'>
								<Badge badgeContent = {totalItems} color = 'secondary'>
									<ShoppingCart />
								</Badge>
							</IconButton>
						</div>)}
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Navigation;