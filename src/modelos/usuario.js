

module.exports = (sequelize, DataTypes) => {
    return ssequelize.define("usuario", {
        cedula:{
            type:DataTypes.STRING,
            primayKey:true,
            allowNull:false,
            unique: 'cedula'

        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: 'email'
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        edad: {
            type: DataTypes-INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'usuario',
        timestamps: true
    });
   
}