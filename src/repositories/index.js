import CourseModel from "../database/course.model.js";

class CoursesRepository {
  async getAllCourses(filter, limit = 10, offset = 0) {
    const courses = await CourseModel.find(filter)
      .skip(offset)
      .limit(limit)
      .lean()
      .exec();
    return courses;
  }
 
}

export default new CoursesRepository();
