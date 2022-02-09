import jwt from "jsonwebtoken"
import {jwtSecretKey} from "../constants/index.js";


class AuthService {
    createAuthToken(id, displayName) {
        const token = jwt.sign({"userId": id, "user": displayName}, jwtSecretKey);
        console.log(token)
        return token
    }

    verifyToken(token) {
        const decoded = jwt.verify(token, jwtSecretKey);
        return decoded.userId;
    }
}

export default new AuthService()