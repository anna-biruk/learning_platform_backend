import coursesService from "../services/index.js";

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
        }
    },
};

export default resolvers;
