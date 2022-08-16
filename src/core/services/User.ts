import { http } from "../utils/http";
import { Axios } from 'axios';
import { CreateUser } from "../../interfaces/user.inteface"
import { VerifyPhone } from "../../interfaces/verify.interface"
class UserService {

       constructor(private readonly request: Axios) {
              console.log(request)
       }


       async createUser(data: CreateUser): Promise<any> {


              const response = await this.request.post("/user", data, {
                     headers: {
                            "Content-Type": "application/json",
                            'public_key': import.meta.env.PUBLIC_KEY
                     },
              });
              return response;
       }

       async getAllUsers(): Promise<any> {
              const response = await this.request.get("/user", {
                     headers: {
                            "Content-Type": "application/json",
                            'public_key': import.meta.env.PUBLIC_KEY
                     },
              });
              return response


       }

       async getUser(id: string): Promise<any> {
              const response = await this.request.get(`/user/:${id}`, {
                     headers: {
                            "Content-Type": "application/json",
                            'public_key': import.meta.env.PUBLIC_KEY
                     },
              });
              return response


       }

       async verifyPhone(data: VerifyPhone): Promise<any> {
              const response = await this.request.put(
                     "user/verify",
                     { ...data },
                     {
                            headers: {
                                   "Content-Type": "application/json",
                                   'public_key': import.meta.env.PUBLIC_KEY
                            },
                     }

              );

              return response;
       }

     
}

export default new UserService(http);
