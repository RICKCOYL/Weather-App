const cToF = (celsius) => {
  const cTemp = celsius;
  const cToFahr = cTemp * 9 / 5 + 32;
};

// const myFunction = () => {
//    const x = document.getElementById('temps');
//    console.log(x);
//    if (x.innerHTML === 'Hello') {
//        x.innerHTML = 'Swapped text!';
//    } else {
//        x.innerHTML = 'Hello';
//    }
// };

// document.getElementById('button').addEventListener('click', myFunction);


export { cToF };