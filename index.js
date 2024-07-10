let number = document.getElementById('mulnum');
let mul = document.getElementById('generatemultable');
let result = document.getElementById('showmultable');
let reset = document.getElementById('resetbtn');


mul.addEventListener('click', createMultable);
reset.addEventListener('click', resetTable);

function createMultable() {
    result.innerHTML = ''; // Clear previous results
    let num = parseInt(number.value);
    for (let i = 1; i <= 10; i++) {
        let line = document.createElement('div');
        line.textContent = `${num} x ${i} = ${num * i}`;
        line.classList.add('text-lg', 'font-bold', 'text-center', 'm-2', 'p-2', 'border', 'border-black', 'rounded-lg', 'bg-lightblue', 'shadow-lg', 'text-shadow', 'decoration-red-500', 'decoration-2', 'decoration-overline', 'decoration-wavy');
        result.appendChild(line);
    }
}

function resetTable() {
    result.innerHTML = '';
    number.value = '';
}



