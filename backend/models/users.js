const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    class User extends Sequelize.Model { }
    User.init({
        firstName: Sequelize.STRING,
        lastName: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING
    }, {
        sequelize,
        modelName: 'user'
    });

    User.sync()
        .then(() => {
            console.log("User model synced with database")
        })
        .catch(err => {
            console.error('Error created user model', err)
        });
    return User;
}