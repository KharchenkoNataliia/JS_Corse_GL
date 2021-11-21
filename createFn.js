const facebook = {
    username: 'Natalia',
    password: '123',
    age: 30,
}

function NewFieldAdd (obj,field,value){
    const NewObject=Object.assign({},obj);
    NewObject[field]=value;

    return NewObject;
}

const linkedin = NewFieldAdd (facebook, 'email','123@gmail.com');
console.log(linkedin)

