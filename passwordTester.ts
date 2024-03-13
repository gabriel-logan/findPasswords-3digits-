/* eslint-disable @typescript-eslint/no-unused-vars */
const correctNumberPlaceRight: number[] = [6, 8, 2]; // One number is correct but in the right place
const correctNumberPlaceWrong: number[] = [6, 1, 4]; // One number is correct and in the wrong place
const twoCorrectNumbersPlaceWrong: number[] = [2, 0, 6]; // two numbers are correct but in the wrong places
const nothingCorrect: number[] = [7, 3, 8]; // nothing is correct
const oneCorrectNumberPlaceWrong: number[] = [7, 8, 0]; // One number is correct but in the wrong place

function checkFirstCondition(password: number[], correctNumberPlaceRight: number[]): boolean {
	for (let i: number = 0; i < correctNumberPlaceRight.length; i++) {
		if (password[i] === correctNumberPlaceRight[i]) {
			return true;
		}
	}
	return false;
}

function checkSecondCondition(password: number[], correctNumberPlaceWrong: number[]): boolean {
	for (let i: number = 0; i < correctNumberPlaceWrong.length; i++) {
		if (
			password.includes(correctNumberPlaceWrong[i]) &&
			password[i] !== correctNumberPlaceWrong[i]
		) {
			return true;
		}
	}
	return false;
}

function checkThirdCondition(password: number[], twoCorrectNumbersPlaceWrong: number[]): boolean {
	let correctCount: number = 0;
	for (let i: number = 0; i < password.length; i++) {
		if (
			password.includes(twoCorrectNumbersPlaceWrong[i]) &&
			password[i] !== twoCorrectNumbersPlaceWrong[i]
		) {
			correctCount++;
		}
	}
	return correctCount === 2;
}

function checkFourthCondition(password: number[], nothingCorrect: number[]): boolean {
	for (let i: number = 0; i < nothingCorrect.length; i++) {
		if (password.includes(nothingCorrect[i])) {
			return false;
		}
	}
	return true;
}

function checkLastCondition(password: number[], oneCorrectNumberPlaceWrong: number[]): boolean {
	let correctCount: number = 0;
	for (let i: number = 0; i < oneCorrectNumberPlaceWrong.length; i++) {
		if (
			password.includes(oneCorrectNumberPlaceWrong[i]) &&
			password[i] !== oneCorrectNumberPlaceWrong[i]
		) {
			correctCount++;
		}
	}
	return correctCount === 1;
}

function findAllPasswords(): string[] {
	const possiblePasswords: string[] = [];
	for (let i: number = 0; i <= 9; i++) {
		for (let j: number = 0; j <= 9; j++) {
			for (let k: number = 0; k <= 9; k++) {
				const password: number[] = [i, j, k];
				if (
					checkFirstCondition(password, correctNumberPlaceRight) &&
					checkSecondCondition(password, correctNumberPlaceWrong) &&
					checkThirdCondition(password, twoCorrectNumbersPlaceWrong) &&
					checkFourthCondition(password, nothingCorrect) &&
					checkLastCondition(password, oneCorrectNumberPlaceWrong)
				) {
					possiblePasswords.push(password.join(''));
				}
			}
		}
	}
	return possiblePasswords;
}

console.log(findAllPasswords());
