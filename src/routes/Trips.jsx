import { getTrips } from "../data";
import { Link, Outlet } from "react-router-dom";

export default function Trips() {
	const trips = getTrips();
	return (
		<div>
			<ul>
				{trips.map((trip) => (
					<li key={trip.id}>
						<Link to={`/${trip.destination}`}>
							<h2>{trip.destination}</h2>
							<p>{trip.dates}</p>
						</Link>
					</li>
				))}
			</ul>
			<Outlet />
		</div>
	);
}