module.exports = function(sequelize, DataTypes) {
  const Company = sequelize.define("Company", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [1]
      }
    }
  });
  return Company;
};
