import InputWrap from "./InputWrap";

export default function InputGroup({ investment, handleChange }) {
	const propertyArray = Object.keys(investment);

	return (
		<div id="user-input">
			<div className="input-group">
				<InputWrap
					name={propertyArray[0]}
					investment={investment.initialInvestment.count}
					handleChange={handleChange}
					investLabel={investment.initialInvestment.name}
				/>
				<InputWrap
					name={propertyArray[1]}
					investment={investment.annualInvestment.count}
					handleChange={handleChange}
					investLabel={investment.annualInvestment.name}
				/>
			</div>
			<div className="input-group">
				<InputWrap
					name={propertyArray[2]}
					investment={investment.expectedReturn.count}
					handleChange={handleChange}
					investLabel={investment.expectedReturn.name}
				/>
				<InputWrap
					name={propertyArray[3]}
					investment={investment.duration.count}
					handleChange={handleChange}
					investLabel={investment.duration.name}
				/>
			</div>
		</div>
	);
}
