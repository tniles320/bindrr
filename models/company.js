module.exports = function(sequelize, DataTypes) {
  const Company = sequelize.define("Company", {
    name : {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  return Company;
};