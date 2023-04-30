let totalCredits = 0;
let totalPoints = 0;

function calculateSGPA() {
	const creditsInput = document.getElementById("credits");
	const gradeSelect = document.getElementById("grade");
	const resultBody = document.getElementById("resultBody");

	const credits = parseInt(creditsInput.value);
	const grade = parseInt(gradeSelect.value);

	if (credits && grade) {
		const points = credits * grade;
		totalCredits += credits;
		totalPoints += points;

		const row = document.createElement("tr");
		row.innerHTML = `
			<td>${credits}</td>
			<td>${grade}</td>
			<td>${points}</td>
		`;

		resultBody.appendChild(row);

		const sgpa = totalPoints / totalCredits;
		document.getElementById("sgpa").textContent = sgpa.toFixed(2);

		creditsInput.value = "";
		gradeSelect.value = "";
	}
}