function OneToNine(number){
    switch(number){
        case 1: return 'one'
        case 2: return 'two'
        case 3: return 'three'
        case 4: return 'four'
        case 5: return 'five'
        case 6: return 'six'
        case 7: return 'seven'
        case 8: return 'eight'
        case 9: return 'nine'
        case '': return ''
    }

}
function TenToNineteen(number){
    switch(number){
        case 10: return 'ten'
        case 11: return 'eleven'
        case 12: return 'twelve'
        case 13: return 'thirteen'
        case 14: return 'fourteen'
        case 15: return 'fifteen'
        case 16: return 'sixteen'
        case 17: return 'seventeen'
        case 18: return 'eighteen'
        case 19: return 'nineteen'
    }
}
function NineteenToNinetynine(number){
    let FirstNumber = Math.floor(number/10);
    let SecondNumber = number-(FirstNumber*10);
    switch(FirstNumber) {
        case 2: {
            if (SecondNumber==0){return `twenty`}
            else { return `twenty ${OneToNine(SecondNumber)}`}
            }
        case 3: {
            if (SecondNumber==0){return `thirty`}
            else {return `thirty ${OneToNine(SecondNumber)}`}
            }
        case 4: {
            if (SecondNumber==0){return `forty`}
            else {return `forty ${OneToNine(SecondNumber)}`}
            }
        case 5:  {
            if (SecondNumber==0){return `fifty`}
            else {return `fifty ${OneToNine(SecondNumber)}`}
            }
        case 6: {
            if (SecondNumber==0){return `sixty`}
            else {return `sixty ${OneToNine(SecondNumber)}`}
            }
        case 7:  {
            if (SecondNumber==0){return `seventy`}
            else {return `seventy ${OneToNine(SecondNumber)}`}
            }
        case 8:  {
            if (SecondNumber==0){return `eighty`}
            else {return `eighty ${OneToNine(SecondNumber)}`}
            }
        case 9:  {
            if (SecondNumber==0){return `ninety`}
            else { return `ninety ${OneToNine(SecondNumber)}`}
            }      
    }
}

function NinetynineTo999(number){
    let FirstNumber = Math.floor(number/100);
    let SecondNumber = number-(FirstNumber*100)
    switch(FirstNumber) {
        case 1: {
            if (SecondNumber==0){return `one hundred`}
            else if(SecondNumber>0 && SecondNumber<10){ return `one hundred ${OneToNine(SecondNumber)}`}
            else if(SecondNumber>9 && SecondNumber<20){ return `one hundred ${TenToNineteen(SecondNumber)}`}
            else if(SecondNumber>19 && SecondNumber<100){ return `one hundred ${NineteenToNinetynine(SecondNumber)}`}
            }
        case 2: {
            if (SecondNumber==0){return `two hundred`}
            else if(SecondNumber>0 && SecondNumber<10){ return `two hundred ${OneToNine(SecondNumber)}`}
            else if(SecondNumber>9 && SecondNumber<20){ return `two hundred ${TenToNineteen(SecondNumber)}`}
            else if(SecondNumber>19 && SecondNumber<100){ return `two hundred ${NineteenToNinetynine(SecondNumber)}`}
            }
        case 3: {
            if (SecondNumber==0){return `three hundred`}
            else if(SecondNumber>0 && SecondNumber<10){ return `three hundred ${OneToNine(SecondNumber)}`}
            else if(SecondNumber>9 && SecondNumber<20){ return `three hundred ${TenToNineteen(SecondNumber)}`}
            else if(SecondNumber>19 && SecondNumber<100){ return `three hundred ${NineteenToNinetynine(SecondNumber)}`}
            }
        case 4: {
            if (SecondNumber==0){return `four hundred`}
            else if(SecondNumber>0 && SecondNumber<10){ return `four hundred ${OneToNine(SecondNumber)}`}
            else if(SecondNumber>9 && SecondNumber<20){ return `four hundred ${TenToNineteen(SecondNumber)}`}
            else if(SecondNumber>19 && SecondNumber<100){ return `four hundred ${NineteenToNinetynine(SecondNumber)}`}
            }
        case 5:  {
            if (SecondNumber==0){return `five hundred`}
            else if(SecondNumber>0 && SecondNumber<10){ return `five hundred ${OneToNine(SecondNumber)}`}
            else if(SecondNumber>9 && SecondNumber<20){ return `five hundred ${TenToNineteen(SecondNumber)}`}
            else if(SecondNumber>19 && SecondNumber<100){ return `five hundred ${NineteenToNinetynine(SecondNumber)}`}
            }
        case 6: {
            if (SecondNumber==0){return `six hundred`}
            else if(SecondNumber>0 && SecondNumber<10){ return `six hundred ${OneToNine(SecondNumber)}`}
            else if(SecondNumber>9 && SecondNumber<20){ return `six hundred ${TenToNineteen(SecondNumber)}`}
            else if(SecondNumber>19 && SecondNumber<100){ return `six hundred ${NineteenToNinetynine(SecondNumber)}`}
            }
        case 7:  {
            if (SecondNumber==0){return `seven hundred`}
            else if(SecondNumber>0 && SecondNumber<10){ return `seven hundred ${OneToNine(SecondNumber)}`}
            else if(SecondNumber>9 && SecondNumber<20){ return `seven hundred ${TenToNineteen(SecondNumber)}`}
            else if(SecondNumber>19 && SecondNumber<100){ return `seven hundred ${NineteenToNinetynine(SecondNumber)}`}
            }
        case 8:  {
            if (SecondNumber==0){return `eight hundred`}
            else if(SecondNumber>0 && SecondNumber<10){ return `eight hundred ${OneToNine(SecondNumber)}`}
            else if(SecondNumber>9 && SecondNumber<20){ return `eight hundred ${TenToNineteen(SecondNumber)}`}
            else if(SecondNumber>19 && SecondNumber<100){ return `eight hundred ${NineteenToNinetynine(SecondNumber)}`}
            }
        case 9:  {
            if (SecondNumber==0){return `nine hundred`}
            else if(SecondNumber>0 && SecondNumber<10){ return `nine hundred ${OneToNine(SecondNumber)}`}
            else if(SecondNumber>9 && SecondNumber<20){ return `nine hundred ${TenToNineteen(SecondNumber)}`}
            else if(SecondNumber>19 && SecondNumber<100){ return `nine hundred ${NineteenToNinetynine(SecondNumber)}`}
            }      
    }
}

module.exports = function toReadable (number) {
    if (number===0) {return 'zero'}
    else if (number>0 && number<10){ return OneToNine(number)}
    else if (number>9 && number<20){ return TenToNineteen(number)}
    else if (number>19 && number<100){return NineteenToNinetynine(number)}
    else if (number>99 && number<1000){return NinetynineTo999(number)}
}
