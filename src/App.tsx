import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomepageMain from "./components/HomepageMain";

function App() {
	return (
		<Router>
			<Header isFull={true} />
			<HomepageMain></HomepageMain>
		</Router>
	);
}

export default App;
