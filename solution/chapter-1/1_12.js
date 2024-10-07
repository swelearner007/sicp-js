function pascal_element(i, j) {
    if(j === 0 || j === i)
        return 1;
    if(j > i)
        return 0;
    return pascal_element(i-1, j-1) + pascal_element(i-1, j);
}

console.log(pascal_element(4, 2));