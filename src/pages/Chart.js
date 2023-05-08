
import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
function Chart(params) {
	let data = params.props;
	return (
		<ResponsiveContainer>
			<LineChart 
				height={300}
				data={data}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Line
					type="monotone"
					dataKey="jc"
					stroke="#8884d8"
					activeDot={{ r: 8 }}
				/>
			</LineChart>

		</ResponsiveContainer>
	);
}

export default Chart;