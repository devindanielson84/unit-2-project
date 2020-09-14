let Decimal = Number(prompt(`Enter Binary count`));
let Binary2 
let Binary3 
let Binary4 
let Binary5 
let Binary6 
let Binary7
let Binary8 
let Binary9 
let BinaryV   
let Hex2 
let Hex3
let Hex4
let Hex5 
let Hex6 
let Hex7
let Hex8
let Hex9
let HexV

Binary9 = Decimal%2, BinaryV = Math.floor(Decimal/2);
Binary8 = BinaryV%2, BinaryV = Math.floor(BinaryV/2);
Binary7 = BinaryV%2, BinaryV = Math.floor(BinaryV/2);
Binary6 = BinaryV%2, BinaryV = Math.floor(BinaryV/2);
Binary5 = BinaryV%2, BinaryV = Math.floor(BinaryV/2);
Binary4 = BinaryV%2, BinaryV = Math.floor(BinaryV/2);
Binary3 = BinaryV%2, BinaryV = Math.floor(BinaryV/2);
Binary2 = BinaryV%2, BinaryV = Math.floor(BinaryV/2);

console.log(` The binary form of that is ${Binary2} ${Binary3} ${Binary4} ${Binary5}  ${Binary6} ${Binary7} ${Binary8} ${Binary9} `);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Hex2 = Decimal, HexV = Math.floor(Decimal/16)

if(remainder1 == 10){
    remainder1 = "A";
}
if(remainder1 == 11){
    remainder1 = "B";
}
if(remainder1 == 12){
    remainder1 = "C";
}
if(remainder1 == 13){
    remainder1 = "D";
}
if(remainder1 == 14){
    remainder1 = "E";
}
if(remainder1 == 15){
    remainder1 = "F";
}
