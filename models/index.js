const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

User.hasMany(Post,{
    foreignKey: "userid",
    onDelete: "CASCADE",
});

Post.belongsTo(User,{
    foreignKey: "userid"
});

User.hasMany(Comment,{
    foreignKey: "userid",
    onDelete: "CASCADE",
});

Comment.belongsTo(User,{
    foreignKey: "userid"
});

Post.hasMany(Comment,{
    foreignKey: "postid",
    onDelete: "CASCADE",
});

Comment.belongsTo(Post,{
    foreignKey: "postid",
    onDelete: "CASCADE",
});

module.exports = {User, Post, Comment};
