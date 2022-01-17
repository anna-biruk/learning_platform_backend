import usersRepository from '../repositories/users.repository.js'

class UsersService {
    async getAllUsers(limit, offset) {
        const users = await usersRepository.getAllUsers(
            limit, offset
        );
        return users;
    }
}

export default new UsersService()