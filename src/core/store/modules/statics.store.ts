import { defineStore } from 'pinia';
import staticService from '../../services/Statics';


const useStatic = defineStore('static', {
       actions: {
              async fetchAllStates(): Promise<any> {
                     try {

                            const response = await staticService.fetchAllStates();
                            if (response.data) { return await Promise.resolve(response) }
                            else if (response.response) { return await Promise.reject(response.response) }
                            else { return await Promise.reject(response.message) }
                     } catch (error: any) {
                            return await Promise.reject(error);
                     }
              },

              async fetchAllStatesByAlias(alias: string): Promise<any> {
                     try {

                            const response = await staticService.fetchAllStatesByAlias(alias);
                            if (response.data) { return await Promise.resolve(response) }
                            else if (response.response) { return await Promise.reject(response.response) }
                            else { return await Promise.reject(response.message) }
                     } catch (error: any) {
                            return await Promise.reject(error);
                     }
              },


       }
})
export default useStatic