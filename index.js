let Decimal = Number(prompt(`Enter Decimal to be converted:`));
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

Hex2 = Decimal%16, HexV = Math.floor(Decimal/16)

if(HexV == 10){
    HexV = "A";
}
if(HexV == 11){
    HexV = "B";
}
if(HexV == 12){
    HexV = "C";
}
if(HexV == 13){
    HexV = "D";
}
if(HexV == 14){
    HexV = "E";
}
if(HexV == 15){
    HexV = "F";
}

if(Hex2 == 10){
    HexV = "A";
}
if(Hex2 == 11){
    HexV = "B";
}
if(Hex2 == 12){
    HexV = "C";
}
if(Hex2 == 13){
    HexV = "D";
}
if(Hex2 == 14){
    HexV = "E";
}
if(Hex2 == 15){
    HexV = "F";
}

console.log(` The hexadecimal form of that is ${HexV} ${Hex2} `);
