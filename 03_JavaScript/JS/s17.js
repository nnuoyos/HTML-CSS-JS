for (let i = 0; i < 10; i++) {
    console.log('포카칩', i);
}

console.log('======prac======');
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}
console.log('======prac======');
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
console.log('======prac======');
for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        console.log(i + 'X' + j + '=' + i * j);
    }
}
