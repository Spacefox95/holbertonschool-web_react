export function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export function getFooterCopy(isIndex) {
	if (isIndex === true) {
		return 'Holberton School';
	};
	return "Holberton School main dashboard"
}