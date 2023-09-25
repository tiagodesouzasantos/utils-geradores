const generateRandomChassis = () => {
    const manufacturerPrefix = generateRandomString(3, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    const vehicleType = generateRandomString(1, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    const randomNumbers = generateRandomString(5, '0123456789');
    const suffix = generateRandomString(2, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    const serialNumber = generateRandomString(6, '0123456789');
    return `${manufacturerPrefix} ${vehicleType}${randomNumbers} ${suffix} ${serialNumber}`;
}

const generateRandomString = (length, characters) => {
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
}

export default generateRandomChassis;
