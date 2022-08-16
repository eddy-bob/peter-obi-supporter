export enum Gender {
       "MALE" = 'male',
       'FEMALE' = 'female'
}

export enum TwoWays {
       'YES' = 'yes',
       'NO' = 'no'
}
export interface CreateUser {
       first_name: string,
       last_name: string,
       alternate_phone: string,
       phone: string,
       gender: Gender,
       lga: string,
       ward: string,
       polling_unit: string,
       pvc_image: string,
       polling_unit_has_network: TwoWays,
       phone_type: string,
       quiz_answer: string,
       middle_name?: string,
       whatsapp_phone: string,
       age_bracket: number,
       member_type: string,
       state_of_origin: string,
       registration_area: string,
       state_of_residence: string
}
export interface UpdateUser {
       first_name?: string,
       last_name?: string,
       alternate_phone?: string,
       phone?: string,
       gender?: Gender,
       lga?: string,
       ward?: string,
       polling_unit?: string,
       pvc_image?: string,
       polling_unit_has_network?: TwoWays,
       phone_type?: string,
       quiz_answer?: string,
       middle_name?: string,
       whatsapp_phone?: string,
       age_bracket?: number,
       member_type?: string,
       state_of_origin?: string,
       registration_area?: string,
       state_of_residence?: string
}