//wrie a multiplication table of 3 using function and loop

for (let i=1; i<=10; i++){
    const multiplication=(i)=>{
        return 3*i;
    };
    const mult=multiplicationTable(i);
    console.log(mult);
}


const a=3;//prompt();
//checks

//define
const mul =(num,i)=>{
    return num*i;

}
//call

for(let i=1; i<=10; i++){
    const res = mul(a,i);
    console.log(res);
}