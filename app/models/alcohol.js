//structure for alcohol
// module.exports = function(sequelize, DataTypes) {
//     var Alcohol = sequelize.define("Alcohol", {
//       alcoholType: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         len: [1]
//       },
//       alcoholContent: {
//         type: DataTypes.Integer,
//         allowNull: false,
//         validate: {
//           len: [1]
//         }
//       },
//     });
  
//     return Alcohol;
//   };

var Alcohol = sequelize.define('Alcohol', {
    alcoholType: { type: Sequelize.STRING },
    alcoholContent: { type: Sequelize.INTEGER }
  });
  Alcohol.sync().then(() => {
    Alcohol.create({
        alcoholType: 'Beer',
        alcoholContent: 6
    });

  });


