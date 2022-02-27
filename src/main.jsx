import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Trips from "./routes/Trips";
import Trip from "./routes/Trip";
import Docs from "./routes/Docs";
import PageNotFound from "./routes/PageNotFound";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route path="my-trips" element={<Trips />} />
					<Route path="my-documents" element={<Docs />} />
          <Route path=":destination" element={<Trip />}/>
				</Route>
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
