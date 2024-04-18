import { useState } from "react";
import Header from "./components/Header.jsx";
import InputGroup from "./components/InputGroup.jsx";
import ResultTable from "./components/ResultTable.jsx";

const INVESTMENT_INITIALIZATION = {
	initialInvestment: { name: "Initial Investment", count: 10000 },
	annualInvestment: { name: "Annual Investment", count: 1200 },
	expectedReturn: { name: "Expected Return", count: 6 },
	duration: { name: "Duration", count: 10 },
};
function App() {
	const [investItem, setInvestItem] = useState(INVESTMENT_INITIALIZATION);

	function handleChange(e) {
		const { name, valueAsNumber } = e.target;
		setInvestItem((preInvestment) => ({
			...preInvestment,
			[name]: {
				...preInvestment[name],
				count: valueAsNumber,
			},
		}));
	}

	const isValid = INVESTMENT_INITIALIZATION.duration.count >= 1;

	return (
		<div>
			<Header />

			<InputGroup investment={investItem} handleChange={handleChange} />

			{!isValid && <div>Please enter a valid data</div>}
			{isValid && <ResultTable investment={investItem} />}
		</div>
	);
}

export default App;
