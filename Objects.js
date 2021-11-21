// 1 object
const season ={
sesonName:'summer',
averageTemperature:27,
message: () => console.log('Summer!!!')
}
season.message();

season.sesonName='Autumn'
console.log('Seson Name is',season.sesonName)


//2 object
const cinema ={
    cinemaName:'Multiplex',
    audiencesNumber: 500,
    isOpen: true
    }
    
    cinema.movieCount=10;
    console.log(cinema)

    
// 3 object
const pen = {
    color: 'black',
    price: '10.0',
    }

  pen.pageCount=100;
  console.log(pen)

  delete pen.price;
  console.log(pen)

// 4 object  
const book = {
    name: 'NewBook',
    author: 'KnownAuthor',
    yearPublication:2020
    }
  
  Object.freeze(book)
  console.log(Object.isFrozen(book))

// 5 object
const pie= {
    name: 'Spartak',
    isCream: true,
    }

    pie.fruit='no';
    console.log(Object.entries(pie))

// 6 object
 
const school= {
    teacher: 'NewTeacher',
    class: '7-A',
    lessonsCount:6,
    }

    if (!(school.class==6)&&(school.lessonsCount=6)){
     school.class=6;
     console.log(school)
    }
     else {console.log ('class=6')}

// 7 object
    const sport={
    type:'football',
    playersCount:11,    
    }   

    if (sport.type==='tenis'){
        sport.playersCount=2,
        console.log(sport)
    }
    else {
        delete sport.playersCount;
        console.log(sport)
    }


    // 8 object
const transport={
    type:'bus',
    passengersNumber:40,  
    price:10,  
    }   

  console.log(Object.keys(transport))

  // 9-10 object
const Facebook = {
    username: 'Natalia',
    password: '123',
    age: 30,
    }
    
    console.log (Facebook)
    const newField='isOnline';
    
    if (!Facebook.hasOwnProperty('isOnline')){
        Facebook[newField]=true
    }
    console.log (Facebook);
    
    const Instagram = Object.assign({},Facebook);
    console.log (Instagram)
    
