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
    Company.associate = function(models) {
      models.Company.hasMany(models.Agent);
    };
    Company.associate = function(models) {
      models.Company.hasMany(models.Client);
    };
    return Company;
  };