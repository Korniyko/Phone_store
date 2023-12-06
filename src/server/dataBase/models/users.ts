import { DataTypes, Model, Sequelize } from 'sequelize';

export interface UsersInterface {
    
    login: string;
    password: string;
 

}

class Users extends Model<UsersInterface> implements UsersInterface {
 
    public login!: string;
    public password!: string;

}

const UsersModule = (sequelize: Sequelize) => {
    Users.init(
        {
       
            login: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        },
        {
            sequelize,
            modelName: 'Users',
        },
    );

    return Users;
};

module.exports = UsersModule;