class Animal {
    constructor(name,color,speed) {
        this.name = name;
        this.color = color;
        this.speed = speed;
    }
    sound() { return ''; };
    run () { return `${this.name} is running with speed ${this.speed}`};
    eat () { return `${this.name} is eatting`}
}

class Cat extends Animal {
    constructor(name,color,speed) {
        super(name,color,speed);
    }
 
    sound() {
        return 'I am Cat';
    };
    jump (){
        return 'I like jumping'
    };
}

const Tom = new Cat('Tom','black',10);
const Kitty = new Cat ('Kitty','red',1);
console.log(Kitty.run());
console.log(Tom.run());
console.log(Tom.sound()); 
console.log(Tom.eat());
console.log(Tom.jump());
 
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
 
    jump() {
        return `${this.name} hate jumping`
    }
}
 

const Rex = new Dog('Rex');
console.log(Rex.jump()); // Woof!

const Mouse=new Animal('mouse', 'grey', 100)
console.log (Mouse.run());
console.log (Mouse.eat());

class Puppy extends Dog {
    constructor(name){
        super(name)
    }

    jump(){
        return `${this.name} like jumping`   
    }
}
const Teddy= new Puppy('Teddy')
console.log (Rex.jump());
console.log(Teddy.jump());


function Bird (name,speed) {
    this.name = name;
    this.speed = speed;
   
    this.fly = function () {
         return `${this.name} is flying with speed ${this.spedd}`;
    };
    this.sound = function () {
      console.log("!!!");
    };
  }
   
  const Parrot = new Bird("Parrot", 20);
  const Penguin = new Bird("Penguin", 0);
  
  console.log(Parrot.fly());
  console.log(Penguin.fly());
  Parrot.sound();

//---------------------------------------------------------------
	
let sum = 0;
arr1=[1,2,3,4,5]

//console.log(i); 
 
for (let i = 0; i < arr1.length; i++) {
  sum +=arr1[i] ;
  console.log(i, sum);
}
 
//console.log(i); 
