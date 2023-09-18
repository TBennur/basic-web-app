export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("what is your andrew id")) {
    return (
      "tbennur"
    );
  }
  if (query.toLowerCase().includes("what is your name")) {
    return (
      "Tanay"
    );
  }
  
  const addMatch = query.match(/What is (\d+) plus (\d+)/);
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x + y).toString();
  }
  const minusMatch = query.match(/What is (\d+) minus (\d+)/);
  if (minusMatch) {
    const x: number = parseInt(minusMatch[1]);
    const y: number = parseInt(minusMatch[2]);
    return (x - y).toString();
  }
  const multMatch = query.match(/What is (\d+) multiplied by (\d+)/);
  if (multMatch) {
    const x: number = parseInt(multMatch[1]);
    const y: number = parseInt(multMatch[2]);
    return (x * y).toString();
  }
  const maxMatch = query.match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)?/);
  if (maxMatch) {
    const x: number = parseInt(maxMatch[1]);
    const y: number = parseInt(maxMatch[2]);
    const z: number = parseInt(maxMatch[3]);
    return (Math.max(Math.max(x, y), z)).toString();
  }

  const squareCubeMatch = query.match(/Which of the following numbers is both a square and a cube: (\d+), (\d+), (\d+), (\d+), (\d+), (\d+), (\d+)?/);
  if (squareCubeMatch) {
    for (let i = 1; i < squareCubeMatch.length; i++) {
      const x: number = parseInt(squareCubeMatch[i])
      const x_cube_root = Math.round(Math.cbrt(x));
      if (x_cube_root * x_cube_root * x_cube_root == x) {
        return x.toString();
      }
    }
  }
  const primeMatch = query.match(/Which of the following numbers are primes: (\d+), (\d+), (\d+), (\d+), (\d+)?/);
  if (primeMatch) {
    for (let i = 1; i < primeMatch.length; i++) {
      var isPrime = true;
      let x = parseInt(primeMatch[i])      
      for (let j = 2; j < x; j++) 
      {
        if (x % j == 0) {
          isPrime = false;
        }
      }
      
      if (isPrime) {
        return x.toString();
      }
    }
  }
  return "";
}
