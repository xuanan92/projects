import { useState } from "react";

export default function InputWrap({
	name,
	investment,
	handleChange,
	investLabel,
}) {
	return (
		<label>
			{investLabel}
			<input
				name={name}
				type="number"
				value={investment}
				onChange={handleChange}
			/>
		</label>
	);
}
