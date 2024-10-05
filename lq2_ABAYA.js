//alert function non-browser
function alert(message) {
    console.log(message);
}
const ps = require("prompt-sync"); //imports the prompt-sync
const prompt = ps();

// Prompt for user input
let name = prompt("Enter your Name: ");
let address = prompt("Enter your Address: ");
let age = parseInt(prompt("Enter your Age: "));
let classRole = prompt("Enter your Class Role (Officer, Student, Teacher): ");
let course = prompt("Enter your Course (BSCS, BSM, BAEL): ");
// it Determines the courses and class roles

if (course == "BSCS" || course == "BSM" || course == "BAEL") {
    
    if (classRole === "Officer") {
        alert("Welcome Officer, ".concat(name),"! You're enrolled in ".concat(course));  // Officer greeting
        
        let i = 0;
        while (i < Math.floor(age / 4)) {
        alert("Officer: " + name);
        i++;
        }
    } else if (classRole === "Student") {
        console.log("Welcome Student, ".concat(name), "! You're enrolled in ".concat(course));  // Student greeting
        
        let i = 0;
        while (i < Math.floor(age / 4)) {
        alert("Student: " + name);
        i++;
        }
    } else if (classRole === "Teacher") {
        console.log("Welcome ma'am/sir, ".concat(name),"! You're teaching in ".concat(course));  // Teacher greeting
        
        let i = 0;
        while (i < Math.floor(age / 4)) {
        alert("Teacher: " + name);
        i++;
        }
    } else {
        
        console.log("Class Role not recognized.");
        
        let i = 0;
        while (i < Math.floor(age / 4)) {
        alert("Default Role: "+ name);
        i++;
}
    }
} else {
    // Fallback for unrecognized course input
    alert("Course not recognized. Please enter valid course (BSCS, BSM, BAEL).");
}