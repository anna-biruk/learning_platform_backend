import UserModel from "../database/user.model.js";

class UsersRepository {
    async getAllUsers(limit = 10, offset = 0) {
        const users = await UserModel.find({})
            .skip(offset)
            .limit(limit)
            .lean()
            .exec();
        return users;

    }
}

export default new UsersRepository();