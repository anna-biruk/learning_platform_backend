import coursesService from "../services/index.js";

const resolvers = {
  Query: {
    courses: async (parent, args) => {
      const { id, title } = args;
      const filter = {};
      if (id && title) {
        filter.$or = [{ title }, { id }];
      } else if (title) {
        filter.title = title;
      } else if (id) {
        filter.id = id;
      }
      const courses = await coursesService.getAllCourses(filter, 10, 0);
      return courses;
    },
  },
};

export default resolvers;
