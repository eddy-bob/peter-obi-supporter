import { defineStore } from 'pinia';
import userService from '../../services/User';
import { CreateUser } from "../../../interfaces/user.inteface"
import { VerifyPhone } from '../../../interfaces/verify.interface';
const useUser = defineStore('user', {
       actions: {
              async createUser(data: CreateUser): Promise<any> {
                     try {

                            const response = await userService.createUser(data);
                            if (response.data) { return await Promise.resolve(response) }
                            else if (response.response) { return await Promise.reject(response.response) }
                            else { return await Promise.reject(response.message) }
                     } catch (error: any) {
                            return await Promise.reject(error);
                     }
              },

              async getUser(id: string): Promise<any> {
                     try {

                            const response = await userService.getUser(id);
                            if (response.data) { return await Promise.resolve(response) }
                            else if (response.response) { return await Promise.reject(response.response) }
                            else { return await Promise.reject(response.message) }
                     } catch (error: any) {
                            return await Promise.reject(error);
                     }
              },
              async getUsers(): Promise<any> {
                     try {

                            const response = await userService.getAllUsers();
                            if (response.data) { return await Promise.resolve(response) }
                            else if (response.response) { return await Promise.reject(response.response) }
                            else { return await Promise.reject(response.message) }
                     } catch (error: any) {
                            return await Promise.reject(error);
                     }
              },
              async verifyPhone(data: VerifyPhone): Promise<any> {
                     try {

                            const response = await userService.verifyPhone(data);
                            if (response.data) { return await Promise.resolve(response) }
                            else if (response.response) { return await Promise.reject(response.response) }
                            else { return await Promise.reject(response.message) }
                     } catch (error: any) {
                            return await Promise.reject(error);
                     }
              },

       }
})
export default useUser