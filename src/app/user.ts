export interface User {
    name: string;
    age: number;
    isIndian: boolean;
    phones: number[],
    address: Address,
    cards: Card[] 
}

interface Address{
    hno: string;
    pin: number
}

interface Card{
    no: number;
    exp: string;
    cvv: number
}