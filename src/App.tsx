import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomepageMain from "./components/HomepageMain";
import Footer from "./components/footer";

function App() {
	return (
		<Router>
			<Header isFull={true} />
			<HomepageMain></HomepageMain>
			<Footer></Footer>
		</Router>
	);
}

export default App;
