'use strict';
module.exports = function(sequelize, DataTypes) {
  var TodoList = sequelize.define('TodoList', {
    name: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        {
    classMethods: {
      associate: function(models) {
        TodoList.hasMany(models.ActionItem,{
          foreignKey: 'action_itemsId',
          as: 'item'
        })
      }
    }
  });
  return TodoList;
};