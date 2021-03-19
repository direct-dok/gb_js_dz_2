function topUpBalance() {
    let num = prompt('Сколько денег вы хотите положить на ваш счет?');
    typePhrase = (num > 10 && num < 20) ? 'рублей' : determineTheCase(num);
    alert(`Ваша сумма в ${num} ${typePhrase} успешно зачислена`);
}

function determineTheCase(num) {9
    let lastSymbol = num[num.length - 1];
    
    switch(lastSymbol) {
        case '1':
            return 'рубль';
        case '2':
        case '3':
        case '4':
            return 'рубля';
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
            return 'рублей';
    }
}

topUpBalance();