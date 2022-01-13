import CourseModel from "../database/course.model.js";

class CoursesRepository {
    async getAllCourses(searchString, limit = 10, offset = 0) {
        const filter = {};

        if (searchString) {
            filter.$or = [
                {title: {$regex: searchString, $options: "i"}},
                {description: {$regex: searchString, $options: "i"}},
            ];
        }
        const courses = await CourseModel.find(filter)
            .skip(offset)
            .limit(limit)
            .lean()
            .exec();
        return courses;
    }

    async getCourseById(id) {
        const course = await CourseModel.findById(id)
        return course
    }
}

export default new CoursesRepository();
