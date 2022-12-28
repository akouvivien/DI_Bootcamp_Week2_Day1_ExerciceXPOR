// excercice 1

// let sentence = ["my","favorite","color","is","blue"];
// Écrivez un code Javascript simple qui rejoindra tous les éléments du tableau ci-dessus, et console.log le résultat.


let sentence = ["my","favorite","color","is","blue"];
console.log(sentence.join(','))


// exercice 2

// let str1 = "mix";
// let str2 = "pod";

// 2. Découpez et échangez les 2 premiers caractères des deux chaînes de la partie 1

let str1 = "mix";
let str2 = "pod";

str1=str1.split("");
str1.splice(0, 2, "p","o");
str1=str1.join("")

str2=str2.split("");
str2.splice(0,2,"m","i");
str2=str2.join("");

console.log(str1+ " "+str2);
// encours


// Exercice 3 : Calculatrice
// Des Instructions
// Faire une calculatrice. Suivez les instructions:

// Demander à l'utilisateur le premier numéro.
// Stockez le premier nombre dans une variable appelée num1.
// Astuce : console.log le type de la variable num1. Que faire pour le convertir en nombre ?
// Demander à l'utilisateur le deuxième numéro.
// Stockez le deuxième nombre dans une variable appelée num2.
// Créez une alerte dont la valeur est la SOMME de num1et num2.
// BONUS : Réalisez un programme qui peut soustraire, multiplier et aussi diviser !


	num1=prompt("entrez une nombre");
	console.log(typeof(num1));
	num1=parseInt(num1)
	num2=prompt("entrez un second nombre");
	num2=parseInt(num2)
	operator=prompt("quelle operation souhaitez vous realiez +;-;/;*");
	switch (operator) {
	        case "+":alert(num1+num2)  
	        break;
	        case "*":alert(num1+num2)  
	        break;
	        case "-":alert(num1*num2)  
	        break;
	        case "/":alert(num1/num2)  
	        break;
	         default:alert("une erreur est survenue")
	        break;
	}
