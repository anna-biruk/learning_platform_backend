import coursesRepository from "../repositories/courses.repository.js";

class CoursesService {
    async getAllCourses(searchString, language, limit, offset) {
        const courses = await coursesRepository.getAllCourses(
            searchString,
            language,
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

    async getCourseById(id) {
        const course = await coursesRepository.getCourseById(id)
        return course;
    }
}

export default new CoursesService();
