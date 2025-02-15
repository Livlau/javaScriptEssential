//Create variables for userRole, accessLevel, isLoggedIn, userMessage, userType, userCategory, isAuthenticated, and authenticationStatus
// Implementing control flow:
//Use if…else statements to assign access levels based on user roles.
//Implement nested if…else statements to customize messages based on login status and user roles.
//Utilize a switch statement to categorize users based on their type.
//Use a ternary operator to determine the authentication status.
//Depending on the value of isAuthenticated, set the authenticationStatus as "Authenticated" or "Not authenticated."


let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);


let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User message:", userMessage);


let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);


let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);