import { Request, Response } from "express"
// import { createUser } from "../dataBase/controlers/usersControler"
import { UsersInterface } from "../dataBase/models/users"
import UsersControler from "../dataBase/controlers/usersControler"

export const userLogin = async (req: Request, response: Response) => {

    const body = req.body

    try {

        const userData: UsersInterface = {
            login: body.login,
            password: body.password
        }
        const usersControler = new UsersControler()

        const user = await usersControler.getUser(userData)
        console.log(user.password, "user");

        let result = null
        if (userData.password === user.password) {
            result = user
        }



        response.json({
            user: result
        })

    } catch (error: any) {
        console.log(`error happend on route getProducts:${error.message}`)
        response.sendStatus(500)
    }
}
