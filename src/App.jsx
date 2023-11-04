import React from 'react';
import LiveGameplay from './pages/live_gameplay';
import "./App.css"
import Navbar from './navbar/Navbar';
import {
	createBrowserRouter,
	RouterProvider,
	Outlet,
	BrowserRouter
  } from "react-router-dom";
import GameHistory from './pages/saved_gameplay';

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <div className="root_div"><LiveGameplay/></div>,
		},
		{
			path: "/game_history",
			element: <div className="root_div"><GameHistory/></div>
		}
	]);

    return (
		<div className='background'>
			<Navbar/>
			<RouterProvider router={router}/>
		</div>
    );
}

export default App;
