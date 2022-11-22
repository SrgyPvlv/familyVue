import http from "../http-common";

class FamilyDataService{
    getAll(){
        return http.get("/family");
    }

    get(id){
        return http.get(`/family/${id}`);
    }

    create(data){
        return http.post("/family",data);
    }

    update(id,data){
        return http.put(`/family/${id}`,data);
    }

    delete(id){
        return http.delete(`/family/${id}`);
    }
}

export default new FamilyDataService();