import InterviewModel from '../database/interview.model.js'

class InterviewRepository {
    async getAllInterviews(limit = 10, offset = 0) {
        const interviews = await InterviewModel.find({})
            .skip(offset)
            .limit(limit)
            .exec()

        return interviews
    }
}

export default new InterviewRepository();