import coursesService from "../services/courses.service.js";
import usersService from "../services/users.service.js";

const resolvers = {
    Query: {
        courses: async (parent, args) => {
            const {searchString, language} = args;
            const courses = await coursesService.getAllCourses(searchString, language, 10, 0);
            return courses;
        },
        courseById: async (parent, args) => {
            const {id} = args;
            const course = await coursesService.getCourseById(id)
            return course;
        },
        users: async (parent, args) => {
            const users = await usersService.getAllUsers(10, 0);
            return users;
        },

    }
};

export default resolvers;
