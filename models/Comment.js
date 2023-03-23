const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1, 2000]
    },

    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
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
    modelName: "comment",
  }
);

module.exports = Comment;
