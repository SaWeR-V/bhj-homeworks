const block = document.getElementsByClassName('reveal');

for (let i = 0; i < block.length; i++) {
    let res = block[i].getBoundingClientRect();
    console.log(res)
}
