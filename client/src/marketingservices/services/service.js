import ApiService from "./api";

const service = {
    submitForm:async (data)=>{
        try {
            const response = await ApiService.post('/new-admission-query',data);
            return response;
        } catch (error) {
            throw error;
        }
    }
}

export default service;