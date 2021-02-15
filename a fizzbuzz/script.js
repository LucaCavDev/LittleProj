// conto fino a 100. fizz quando n/3= intero   buzz quando n/5= intero   fizzbuzz se divisibile per entrambi


for (let index = 1; index <= 100; index++) {
    var item = '';
    if ((index % 3) === 0) {
        item += 'Fizz';
    }
    if ((index % 5) === 0) {
        item += 'Buzz';
    }
    if (item === '') {
        item = index;
    }

    console.log(item);   
 

    document.getElementById('list').insertAdjacentHTML( 'beforeend', '<li>' + item + '</li>' )

    
    
}