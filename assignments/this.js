/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Object binding - "this" referes to the window/tab/console object open.
* 2. Implicit Binding - "this" referes to the object its scoped within or the object that's passed in a function.
* 3. New Binding - "this" referese to the specific instance created.
* 4. Explicit Binding - "this" used through preprogramed functions like .call or .apply.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
console.log(this);

// Principle 2
// code example for Implicit Binding
const impBind = {
	name: 'Jack',
	speak: function(){
		console.log(this.name)
	}
};

impBind.speak();

// Principle 3
// code example for New Binding
function Planet(obj) {
	this.name = obj.name;
	this.solar_system = obj.solar_system;
	this.galaxy = obj.galaxy;
}

const earth = new Planet({name: "Earth", solar_system: "Sol", galaxy: "Milky Way"});
console.log(earth);

// Principle 4
// code example for Explicit Binding
function trackLocation() {
	console.log(`${this.name} is located in the ${this.solar_system} system within the ${this.galaxy} galaxy.`);
};

trackLocation.call(earth);