function fibonacci(num){
    const fibo = [];
    if (num === 1){
        fibo.push(0);
    } else if (num >= 2){
        fibo.push(0,1);
        for (let i= 2; i < num; i ++){
        fibo[i]= fibo[i - 1] + fibo[i - 2]
        }
    }
    return fibo;
}
numero = prompt("ingrese la cantidad de numero que quiere ver en la secuencia"); //html
//numero = 2; // node
num = parseFloat(numero);

if (!isNaN(num) && num > 1) {
    let resultado = fibonacci(num);
    console.log("Los primeros " + num + " números de la serie de Fibonacci son: " + resultado);
  } 
 else if (!isNaN(num) && num === 1) {
    let resultado = fibonacci(num);
    console.log("El primer número de la serie de Fibonacci es: " + resultado);
  }else {
    console.log("Por favor, ingrese un número válido y mayor que cero.");
  }