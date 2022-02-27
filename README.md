# Project practice
Practicing setting up React project with React Router

## What I did here
- Set up a React project with Vite and add React Router dependency
- Create two buttons "My Trips" and "My Docs" in `App` component

```JavaScript
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
```

- Add static, dynamic (`:destination`) and catch-all `PageNotFound` routes in `main.jsx`

```JavaScript
ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route path="my-trips" element={<Trips />} />
					<Route path="my-documents" element={<Docs />} />
					<Route path=":destination" element={<Trip />} />
				</Route>
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
```

- Created fake array of trips in a `data.js` file (for just for demo purposes)
```JavaScript
let trips = [
	{ id: "1", destination: "Paris", dates: "25/2/2022-10/3/2022" },
	{ id: "2", destination: "London", dates: "4/4/2022-10/4/2022" },
];

export function getTrips() {
    return trips
}
```

- Render a list of trips in a `Trips` component
```JavaScript
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
```

- Render an individual trip page with `useParams` built in function from React Router
```JavaScript
import { useParams } from "react-router-dom";

export default function Trip() {
  let trip = useParams();

  return (
		<div>
			<h2>Individual Trip: {trip.destination}</h2>
		</div>
	);
}
```
