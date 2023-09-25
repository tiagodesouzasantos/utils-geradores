const generateRandomPlate = () => {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const firstLetters = [letters[0], letters[1], letters[2], letters[3], letters[4], letters[5], letters[6]];
  const secondLetters = [letters[16], letters[17], letters[18], letters[19], letters[20], letters[21], letters[22], letters[23], letters[24], letters[25]];
  const randomLetters = [
    firstLetters[Math.floor(Math.random() * firstLetters.length)],
    secondLetters[Math.floor(Math.random() * secondLetters.length)],
    letters[Math.floor(Math.random() * letters.length)],
  ];
  const randomNumbers = Array.from({ length: 4 }, () => numbers[Math.floor(Math.random() * numbers.length)]);
  return `${randomLetters.join('')}-${randomNumbers.join('')}`;
}

export default generateRandomPlate;