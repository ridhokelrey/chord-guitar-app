const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcrypt'));

function hashPassword (user, options) {
  const saltRounds = 8;

  if (!user.changed('password')) {
    return;
  }

  return bcrypt
    .genSalt(saltRounds)
    .then(salt => bcrypt.hash(user.password, salt, null))
    .then(hash => {
      user.setDataValue('password', hash)
    });
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING
    }
  }, {
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword
    }
  });

  User.prototype.comparePassword = function (password) {
    return bcrypt.compare(password, this.password)
  }

  return User;
}