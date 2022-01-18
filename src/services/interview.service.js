import interviewRepository from '../repositories/interview.repository.js'

class InterviewsService {
    async getAllInterviews(limit, offset) {
        const interviews = await interviewRepository.getAllInterviews(limit, offset)
        return interviews;
    }
}

export default new InterviewsService();