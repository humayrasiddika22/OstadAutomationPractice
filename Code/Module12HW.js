// Find the average number from array
class arrayClass
{
    findAverage (array)
    {
        let add=0;
        for (let i=0; i<array.length; i++)
        {
            add=add+array[i];
        }
        console.log(add/array.length)
    }
}

// Find the Even and Odd number
class numberClass
{
    findOddEven (number)
    {
        if (number%2==0)
        {
            return "This is Even number!"
        }
        else
        {
            return "This is Odd number!"
        }
    }
}

let array=[10,55,2,4,19,68,0,14,24];

// Objects of the classes
const result1=new arrayClass();
const result2=new numberClass();

result1.findAverage(array)

console.log(result2.findOddEven(22))
console.log(result2.findOddEven(11))
