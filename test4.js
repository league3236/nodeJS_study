var Users = [
    {name: '첫째 리그캣', age: 25}, 
    {name: '둘째 리그캣', age: 23},
    {name: '셋째 리그캣', age: 23}
]

console.log('배열 요소의 수 : %d', Users.length);

for(var i=0; i < Users.length; i++){
    console.log("%d번째 리그캣의 이름 %s",i+1,Users[i].name);
}
