import { http } from "../utils/http";
import { Axios } from 'axios';


class StaticService {

       constructor(private readonly request: Axios) {
              console.log(request)
       }
       async fetchAllStates(): Promise<any> {
              const response = await this.request.get(`static/states`, {
                     headers: {
                            "Content-Type": "application/json",
                            'public_key': import.meta.env.PUBLIC_KEY
                     },
              });
              return response;
       }

       async fetchAllStatesByAlias(alias: string): Promise<any> {
              const response = await this.request.get(`static/regions/:${alias}`, {
                     headers: {
                            "Content-Type": "application/json",
                            'public_key': import.meta.env.PUBLIC_KEY
                     },
              });
              return response;
       }
}
export default new StaticService(http)