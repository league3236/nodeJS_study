var Users = [
    {name: '첫째 리그캣', age: 25}, 
    {name: '둘째 리그캣', age: 23}
]

var fun = function (a,b){
    return a+b+'함수 추가하기'; 
}
Users.push(fun);

console.log('첫째 이름: %s, 첫째 나이: %d',Users[0].name,Users[0].age );
console.log('둘째 이름: %s, 둘째 나이: %d',Users[1].name,Users[1].age );
console.log('추가한 함수 실행 : %s', Users[2](3,4));

