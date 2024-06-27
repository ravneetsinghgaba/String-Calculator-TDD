const add = (num) => {
    if (num === '') return 0;
    if(!num.includes(',')) return parseInt(num);

    const numArray = num.split(',').map(Number);
    return numArray[0] + numArray[1];
};

export default add;