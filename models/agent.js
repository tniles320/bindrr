// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
const bcrypt = require("bcrypt");

module.exports = function(sequelize, DataTypes) {
  const Agent = sequelize.define("Agent", {
    first_name : {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    last_name : {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  Agent.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  Agent.addHook("beforeCreate", agent => {
    agent.password = bcrypt.hashSync(
      agent.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
  Agent.associate = function(models) {
    models.Agent.hasMany(models.Client);
  };
  Agent.associate = function(models) {
    models.Agent.belongsTo(models.Company, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Agent;
};

// alters table if it doesn't match model
// Agent.sync({ alter: true })
