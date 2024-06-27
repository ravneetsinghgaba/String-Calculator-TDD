const add = (num) => {
    if (num === '') return 0;
    if(!num.includes(',')) return parseInt(num);

    const numArray = num.split(',').map(Number);
    return numArray.reduce((sum, num) => sum + num, 0);
};

export default add;