
// $(function () {
//     $("#p-1-placeholder").load("../cards/card-1/p-1.html");
// });

const h1 = document.querySelector('h1');
const input = document.querySelector('input');
input.addEventListener('keyup', function() {
    h1.innerHTML = input.value;
})