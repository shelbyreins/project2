// Export borewell model
module.exports = function(sequelize, DataTypes) {
    var Alcoholuser = sequelize.define("Alcoholuser", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        count: {
            type: DataTypes.INTEGER,
          
        },

        price: {
            type: DataTypes.INTEGER,   
        },
        
        alcoholId: {
            type: DataTypes.INTEGER
        }
    });

    Alcoholuser.associate = function(models) {
        models.Alcoholuser.hasMany(models.User, { onDelete: 'cascade' });
    };

    Alcoholuser.associate = function(models) {
        models.Alcoholuser.belongsTo(models.Alcohol);
    };
    Alcoholuser.associate = function(models) {
        models.Alcoholuser.belongsTo(models.User);
    };

    return Alcoholuser;
}