var Person = {
    age: 25,
    name: '리그캣',
    mul: function(a,b){
        return a*b;
    }
};

console.log('곱하기: %d', Person.mul(10,10));
console.log('이름도 출력해 볼까요?: %s',Person.name);