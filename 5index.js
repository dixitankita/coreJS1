function login(username, password) {
    const correctUsername = "admin";
    const correctPassword = "12345";

    if (username === correctUsername && password === correctPassword) {
        console.log("Login successful");
    } else {
        console.log("Invalid credentials.");
    }
}

// Example usage:
login("admin", "12345");
login("user", "12345");
login("admin", "wrongpassword");
