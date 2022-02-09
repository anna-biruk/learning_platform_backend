import usersRepository from '../repositories/users.repository.js'

class UsersService {
    async getAllUsers(limit, offset) {
        const users = await usersRepository.getAllUsers(
            limit, offset
        );
        return users;
    }

    async getUserById(id) {
        const user = await usersRepository.getUserById(id)
        return user;
    }
}

export default new UsersService()