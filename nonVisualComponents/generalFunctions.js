export const getGender = (val) => {
	if (val == 0) return "Kadın";
	else if (val == 1) return "Erkek";
	else if (val == 2) return "Non-Binary";
	else return "Beyan Edilmemdi";
};

export const getAge = (date) => {
	var birthday = new Date(date);
	return ~~((Date.now() - birthday) / 31557600000);
};
