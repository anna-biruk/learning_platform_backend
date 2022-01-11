import coursesService from "../services/index.js";

const resolvers = {
  Query: {
    courses: async (parent, args) => {
      const { searchString } = args;
      const courses = await coursesService.getAllCourses(searchString, 10, 0);
      return courses;
    },
  },
};

export default resolvers;
