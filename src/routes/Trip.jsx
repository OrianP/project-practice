import { useParams } from "react-router-dom";

export default function Trip() {
	let trip = useParams();

	return (
		<div>
			<h2>Individual Trip: {trip.destination}</h2>
		</div>
	);
}
