// https://www.digitalocean.com/community/tutorials/js-closures

function counter() {
    let a = 0;
    return () => {
        a++;
        console.log('a', a);
    }
}

let add = counter();

add();
add();
add();

// console.log(counter());
// counter();
// counter();