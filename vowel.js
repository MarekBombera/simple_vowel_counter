const input = document.querySelector('.input');
const button = document.querySelector('.button');
const countResult = document.querySelector('.count-result');


const displaysResult = (number) => {
    if(number === 0) {
        countResult.style.color = 'red';
        countResult.innerText = number;
        input.value = '';
        input.focus();
        return
    }
        countResult.style.color = 'yellowgreen';
        countResult.innerText = number;
        input.value = '';
        input.focus();
}

const countsVowels = () => {
    const inputValue = input.value.split('');
    const vowels = ['a','e','i','o','u'];
    let vowelCounter = 0;

    inputValue.forEach(value => {
        for (let i in vowels) {
            if (value == vowels[i]) {
                vowelCounter += 1 ;
            }
        }
    })

    displaysResult(vowelCounter);
}




button.addEventListener('click', countsVowels);

