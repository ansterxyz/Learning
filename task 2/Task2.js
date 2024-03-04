let task = (numbers) =>
{
    let result = 1;
    for (let i = 0; i < numbers.length; i++) 
    {
      result *= numbers[i];
    }
    console.log(result)
}

const a = [2, 3, 4, 5]

task(a);