import { calculateInvestmentResults } from "../util/investment";
import { formatter } from "../util/investment";
export default function ResultTable({ investment }) {
	const annualData = calculateInvestmentResults({
		initialInvestment: +investment.initialInvestment.count,
		annualInvestment: +investment.annualInvestment.count,
		expectedReturn: +investment.expectedReturn.count,
		duration: +investment.duration.count,
	});

	const initialInvestment =
		annualData[0].valueEndOfYear -
		annualData[0].interest -
		annualData[0].annualInvestment;

	return (
		<table id="result">
			<thead>
				<tr>
					<th className="center">Year</th>
					<th className="center">Investment Value</th>
					<th className="center">Interest (Year)</th>
					<th className="center">Total Interest</th>
					<th className="center">Invested Capital</th>
				</tr>
			</thead>
			<tbody>
				{annualData.map((yearlyOutput) => {
					const totalInterest =
						yearlyOutput.valueEndOfYear -
						yearlyOutput.annualInvestment * yearlyOutput.year -
						initialInvestment;
					const totalAmountInvested =
						yearlyOutput.valueEndOfYear - totalInterest;
					return (
						<tr key={yearlyOutput.year}>
							<td>{yearlyOutput.year}</td>
							<td>{formatter.format(yearlyOutput.valueEndOfYear)}</td>
							<td>{formatter.format(yearlyOutput.interest)}</td>
							<td>{formatter.format(totalInterest)}</td>
							<td>{formatter.format(totalAmountInvested)}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
