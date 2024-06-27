const add = (num) => {
    if (num === '') return 0;
    //if(!num.includes(',')) return parseInt(num);

    let delimiters = /,|\n/;
    if (num.startWith('//')){
        const parts = num.split('\n');
        delimiters = new RegExp(parts[0].slice(2));
        num = parts[1];
    }

    const numArray = num.split(delimiters).map(Number);
    return numArray.reduce((sum, num) => sum + num, 0);
};

export default add;