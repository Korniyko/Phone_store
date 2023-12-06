import { Request, Response } from "express"
import UsersControler from "../dataBase/controlers/usersControler"
import { UsersInterface } from "../dataBase/models/users"

export const userRegistration = async (req: Request, response: Response) => {

    const body = req.body

    try {
        // console.log(body)

        const userData: UsersInterface = {
            login: body.login,
            password: body.password
        }
        const usersControler = new UsersControler()
        await usersControler.createUser(userData)

        response.json({})
    } catch (error: any) {
        console.log(`error happend on route getProducts:${error.message}`)
        response.sendStatus(500)
    }

}