module.exports = function(sequelize, DataTypes) {
  const Client = sequelize.define("Client", {
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
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    wants_follow_up: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    last_follow_up: {
      type: DataTypes.STRING,
      defaultValue: "N/A"
    }
  });
  return Client;
};

// alters table if it doesn't match model
// Client.sync({ alter: true })
