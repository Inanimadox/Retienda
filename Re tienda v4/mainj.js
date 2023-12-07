let tarjetasdestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null; 
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let tiempoRegresivoId = null;

let mostrarMovimientos = document.getElementById('movimientos');
let mostrarAciertos = document.getElementById('aciertos');
let mostrarTiempo = document.getElementById('t-restant');

let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numeros = numeros.sort(()=>{return Math.random()-0.5});
console.log(numeros);

function contartiempo()
{
	tiempoRegresivoId = setInterval(()=>
	{
		timer--;
		mostrarTiempo.innerHTML = `Tiempo ${timer} segundos`;
		if (timer==0) 
		{
			clearInterval(tiempoRegresivoId);
		}
	},1000);

}

function destapar (id)
{

	if(temporizador == false)
	{
		contartiempo();
		temporizador = true;

	}

	tarjetasdestapadas++;
	console.log(tarjetasdestapadas);

	if(tarjetasdestapadas == 1)
	{

		tarjeta1 = document.getElementById(id);
		primerResultado = numeros[id];
		tarjeta1.innerHTML = primerResultado;

		tarjeta1.disabled = true;
	}
	else if(tarjetasdestapadas == 2)
	{
		tarjeta2 = document.getElementById(id);
		segundoResultado = numeros[id];
		tarjeta2.innerHTML = segundoResultado;

		tarjeta2.disabled = true;

		movimientos++;
		console.log(movimientos);
		mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;

		if(primerResultado == segundoResultado)
		{
			tarjetasdestapadas = 0;
			aciertos++;
			mostrarAciertos.innerHTML = `Acertados: ${aciertos}`;
		}else
		{
			setTimeout(function() 
			{
			tarjeta1.innerHTML = ' ';
			tarjeta2.innerHTML = ' ';
			tarjeta1.disabled = false;
			tarjeta2.disabled = false;
			tarjetasdestapadas = 0;
			}, 2000);
		}
		if (aciertos==8) {
			mostrarAciertos.innerHTML = `🎆Ganaste y tus Aciertos son🎉: ${aciertos}`;
			mostrarMovimientos.innerHTML = `♟Tus movimientos fueron de: ${movimientos}`;
		}
	}
}