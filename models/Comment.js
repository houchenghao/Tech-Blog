const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    postid: {
        type: DataTypes.INTEGER,
        reference: {
            model: "post",
            key: "id"
        }
    },
    userid: {
        type: DataTypes.INTEGER,
        references:{
            model: "user",
            key: "id"
        }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Comment;