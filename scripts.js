const convertValue = document.querySelector('#converter');
const result = document.querySelector('.result');
const celcius = document.querySelector('.one');
const fahrenheit = document.querySelector('.two');
const convBtn = document.querySelector('.conv');
const resetBtn = document.querySelector('.reset');
const changeBtn = document.querySelector('.change');
let text = '';


const convert = () => {
    if(convertValue.value !== ''){
        if (celcius.classList.contains('two')) {
            text = `${convertValue.value}°F = ${((convertValue.value - 32) * 0.5556).toFixed(1)}°C`;
            result.textContent = text;
        } else {
            text = `${convertValue.value}°C = ${(convertValue.value * 1.8 + 32).toFixed(1)}°F`;
            result.textContent = text;
   
        }
}else{
    result.textContent = `You must add value to convert`
    
}
};

const switcher = () => {
	celcius.classList.toggle('two');
	celcius.classList.toggle('one');
	fahrenheit.classList.toggle('two');
	fahrenheit.classList.toggle('one');
	if (celcius.classList.contains('two')) {
		celcius.textContent = '°F';
		fahrenheit.textContent = '°C';
        convert()
	} else {
		celcius.textContent = '°C';
		fahrenheit.textContent = '°F';
        convert()
	}
};

const reset = () =>{
    convertValue.value = ''
    result.textContent = ''
}


convBtn.addEventListener('click', convert);
changeBtn.addEventListener('click', switcher);
resetBtn.addEventListener('click', reset);



