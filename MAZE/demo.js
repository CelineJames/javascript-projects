// console.log(this)

// const person = {
//     name: 'Zahavi',
//     greet: function(){
//         document.write('Hello Mr. '+this.name)
//     }
// }

// person.greet();


// function Car(){
//     this.color = 'green',
//     this.speed = '140'
//     this.type = 'Hyundai'
//     this.model = 'Sonata'
// }

// const myCar = new Car();
// console.log(myCar.speed)


// const yourCar = new Car();
// yourCar.color = 'green';
// yourCar.type = 'Toyota';

// console.log(yourCar)


class Office{
    constructor(address, city){
        this.address = address,
        this.city = city
    }
}

const myOffice = new Office('Haven Lane', 'Uyo');
console.log(myOffice.city)