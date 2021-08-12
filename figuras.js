
console.group("Cuadrado")
const lC=5;
console.log(`Los lados del cuadrado miden: ${lC}cm \nEl perimetro es:${lC*4}cm\nSu area: ${lC**2}cm^2`);
console.groupEnd();

console.group("Triangulo")
const lt1=6,lt2=6,lt3=6,bt=lt2,ht=5.5;
console.log(`Los lados del triangulo miden: ${lt1}cm, ${lt2}cm, ${lt3}cm \nEl perimetro es:${lt1+lt2+lt3}cm\nSu area: ${(bt*ht)/2} cm^2`);
console.groupEnd();

console.group("Circulos")
const PI=Math.PI, r=4, diametro=r*2;
console.log(`El valor de PI: ${PI} \nEl perimetro es:${diametro*PI}cm\nSu area: ${(r**2)*PI} cm^2`);
console.groupEnd();