function check_prime(num)
{
let count=0;
for(let i=1;i<=num;i++){
if(num%i==0){
count++;
}
if(count==2)
console.log("number is prime")
else 
console.log("number is not prime");
}
for(let i=1;i<=10;i++){
check_prime(i)
}
