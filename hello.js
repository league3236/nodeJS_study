var Person={}

Person['age'] = 25;
Person['name'] = '리그캣';
Person.mobile = '010-1111-1111';

console.log('나이 : %d', Person.age);
console.log('이름 : %s', Person.name);
console.log('전화 : %s', Person['mobile']);