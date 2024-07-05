import { request } from "./apiHandler";
const baseUrl = "http://localhost:8000/api"
export const API ={
    //Organization
    Register: (body)=>request.post(baseUrl+"/organizations/",body),
    Login:(body)=> request.post(baseUrl+"/organizations/login",body),
    GetAllOrganization:(body)=>request.get(baseUrl+"/organizations/"),
    GetOrganizationById:(id)=>request.get(baseUrl+"/organizations/"+id),

}