import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function App() {
	return (
		<Router>
			<Header isFull={true} />
		</Router>
	);
}

export default App;
