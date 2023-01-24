var myVariable = 'Hello, World!'

function myFunction(x, y)
{
    return x + y;
}

// Features Implementadas na Versão ES 2015 (ES 6)
let number = 2;
const PI = 3.14;

var numbers = [1, 2, 3];

// Utilizando Function map (Default)
numbers.map(function (value) {
    return value * 2;   
});

// Utilizando Function map (Arrow Function)
numbers.map(value => value * 2);


class Mathematics {
    sum(x, y) {
        return x +y;
    }
}

// Tipagem de Variáveis em TypeScript
var typedVariable: string = '';
// @ts-ignore
typedVariable = 4;

var untypedVariable: any =  'Hello, World!';
untypedVariable = 4;