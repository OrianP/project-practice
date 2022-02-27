import { useState, useEffect } from "react";
import "./App.css";
import { Outlet, Link } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<h1>Trip Planner</h1>
			<Link to="/my-trips">
				<button>My Trips</button>
			</Link>
			<Link to="/my-documents">
				<button>My Docs</button>
			</Link>
			<Outlet />
		</div>
	);
}

export default App;
