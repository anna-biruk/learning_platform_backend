import coursesRepository from "../repositories/index.js";

class CoursesService {
  async getAllCourses(searchString, limit, offset) {
    const courses = await coursesRepository.getAllCourses(
      searchString,
      limit,
      offset
    );
    const result = courses.map((item) => {
      return {
        id: item._id,
        ...item,
      };
    });
    return result;
  }
}

export default new CoursesService();
