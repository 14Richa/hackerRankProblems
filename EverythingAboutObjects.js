var person = {
	name : "Richa",
	age: 10,
	speak: function(line)
	{
		console.log("May name is "+ this.name);
		console.log("hello! I want "+line);
	}
};

// //way 1
// console.log(person.name);
// //way 2
// console.log(person["name"]);
// person.height = 12;
//person.speak("blood");
// person.speak2 = function(line)
// 				{
// 					console.log("Later defined speak");
// 				}
// person.speak2();

class People
{
	constructor(name,age)
	{
		this.name = name;
		this.age = age;
	}
	speak(line)
	{
		console.log(line);
	}
}

names = ["hfdui", "fsdufd", "jfdio"];
ages = [23,43,54];
var persons = [];
for(var i=0;i<3;i++)
{
	var p = new People(names[i],ages[i]);
	persons.push( p );
}

persons[0].age = 1;

console.log(persons);
