'use strict';
module.exports = function(sequelize, DataTypes) {
  var ActionItems = sequelize.define('ActionItem', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        {
    classMethods: {
      associate: function(models) {
        ActionItem.belongsTo(models.TodoList,{
          foreignKey: 'todo_listsId',
          onDelete: 'CASCADE'
        })
      }
    }
  });
  return ActionItems;
};