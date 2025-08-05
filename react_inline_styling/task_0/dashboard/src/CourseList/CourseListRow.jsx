	const headerRowStyle = { backgroundColor: "#deb5b545"}
	const defaultRowStyle = { backgroundColor: '#f5f5f5ab'}

function CourseListRow({ isHeader = false, textFirstCell = "", textSecondCell = null }) {
	const rowStyle = isHeader ? headerRowStyle : defaultRowStyle;

	return (
		<tr style={rowStyle}>
			{isHeader ? (
				textSecondCell === null ? (
					<th colSpan="2">{textFirstCell}</th>
				) : (
					<>
						<th>{textFirstCell}</th>
						<th>{textSecondCell}</th>
					</>
				)
			) : (
				textSecondCell === null ? (
					<td colSpan="2">{textFirstCell}</td>
				) : (
					<>
						<td>{textFirstCell}</td>
						<td>{textSecondCell}</td>
					</>
				)
			)}
		</tr>
	);
}

export default CourseListRow;