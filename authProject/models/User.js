class User {
    constructor(email, username, password, isActive) {
        this.email = email;
        this.username = username;
        this.password = password;
        this.isActive = isActive; // flag
    };
};

module.exports = User;