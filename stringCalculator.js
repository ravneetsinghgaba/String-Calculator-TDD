const add = (num) => {
    if (num === '') return 0;
    if(!num.includes(',')) return parseInt(num);
    return 0;
};

export default add;