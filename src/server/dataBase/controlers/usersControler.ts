import { Op } from "sequelize";
import type { UsersInterface } from "../models/users";
import { CredentialType } from "../../../types";
const { sequelize } = require("../models");
const UsersModule = require("../models/users");

// Предположим, что модель Users возвращается путем вызова функции UsersModule
// const Users = UsersModule(sequelize);

// export const createUser = async (userData: UsersInterface) => {
//     console.log(userData, "fdsfsdddddddddd");

//     const transaction = await sequelize.transaction();
//     try {
//         await Users.create(userData, { transaction }); 
//         await transaction.commit();
//     } catch (error) {
//         console.log(error);
//         await transaction.rollback();
//     }
// };


class UsersControler {
    private usersModel: any;
    constructor() {
        this.usersModel = UsersModule(sequelize);
    }
    public async createUser(userData: UsersInterface) {
        const transaction = await sequelize.transaction();
        try {
            await this.usersModel.create(userData, { transaction });
            await transaction.commit();
        } catch (error) {
            console.log(error);
            await transaction.rollback();
        }
    }

    public async getUser(userData: CredentialType) {

        try {
            const loginUser = await this.usersModel.findOne({
                where: {
                    login: {
                        [Op.eq]: userData.login,
                    }
                }
            });
            return loginUser?.dataValues
        } catch (error) {
            console.log(error);
        }
    }
}
export default UsersControler