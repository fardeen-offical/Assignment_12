// =======================
// Example 1: Day-Based Meal Suggestion
// =======================
document.writeln("<h2>Example 1: Day-Based Meal Suggestion</h2>");

let day = prompt("Enter the day of the week (e.g., Monday):");

if (day === "Monday") {
    document.writeln("Today is Biryani!<br>");
} else if (day === "Tuesday") {
    document.writeln("Today is Nihari!<br>");
} else if (day === "Wednesday") {
    document.writeln("Today is Fried Chicken!<br>");
} else if (day === "Thursday") {
    document.writeln("Today is Pizza!<br>");
} else if (day === "Friday") {
    document.writeln("Today is Burgers!<br>");
} else if (day === "Saturday") {
    document.writeln("Today is Pasta!<br>");
} else if (day === "Sunday") {
    document.writeln("Today is Steak!<br>");
} else {
    document.writeln("Invalid day entered.<br>");
}

document.writeln("<br>");

// =======================
// Example 2: Weekend vs Weekday Reminder
// =======================
document.writeln("<h2>Example 2: Weekend vs Weekday Reminder</h2>");

if (day === "Saturday" || day === "Sunday") {
    document.writeln("Relax, it's the weekend!<br>");
} else if (
    day === "Monday" ||
    day === "Tuesday" ||
    day === "Wednesday" ||
    day === "Thursday" ||
    day === "Friday"
) {
    document.writeln("Work hard, it's a weekday!<br>");
} else {
    document.writeln("Invalid day entered.<br>");
}

document.writeln("<br>");

// =======================
// Example 3: Age-Based Discount Calculation
// =======================
document.writeln("<h2>Example 3: Age-Based Discount Calculation</h2>");

let age = parseInt(prompt("Enter your age:"));

if (age < 18 && (day === "Friday" || day === "Saturday")) {
    document.writeln("You get a 15% discount!<br>");
} else if (age >= 18 && age < 50 && ["Monday","Tuesday","Wednesday","Thursday"].includes(day)) {
    document.writeln("You get a 10% discount!<br>");
} else if (age >= 50 && day === "Sunday") {
    document.writeln("You get a 20% discount!<br>");
} else {
    document.writeln("No discount available.<br>");
}
