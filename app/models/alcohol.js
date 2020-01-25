// Export borewell model
module.exports = function(sequelize, DataTypes) {
    var Alcohol = sequelize.define("Alcohol", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        alcoholType: {
            type: DataTypes.STRING,
            allowNull: false,
            
        },

        alcoholContent: {
            type: DataTypes.INTEGER,
            allowNull: false,
            
        }
    });

    Alcohol.associate = function(models) {
        models.Alcohol.hasMany(models.Alcoholuser, { onDelete: 'cascade' });
    };

   

    return Alcohol;
}