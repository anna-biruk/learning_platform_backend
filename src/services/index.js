import coursesRepository from "../repositories/index.js";

class CoursesService {
  async getAllCourses(filter, limit, offset) {
    const courses = await coursesRepository.getAllCourses(filter, limit, offset);
    const result = courses.map((item) => {
      return {
        id: item._id,
        title: item.title,
        description: item.description,

      };
    });
    return result;
  }
  
}

export default new CoursesService();
