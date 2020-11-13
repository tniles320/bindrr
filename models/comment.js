module.exports = function(sequelize, DataTypes) {
  const Comment = sequelize.define("Comment", {
    title: {
      type: DataTypes.STRING
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Comment;
};

// alters table if it doesn't match model
// Client.sync({ alter: true })
