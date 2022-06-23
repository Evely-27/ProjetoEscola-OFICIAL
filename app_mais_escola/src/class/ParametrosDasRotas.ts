import { User } from "./User";
import UserSchool from "./UserSchool";

export type ParametrosDasRotas = {
    Welcome: undefined,
    Login: undefined, 
    Register:  undefined, 
    ListSchool: User | undefined,
    ReportStudent: undefined,
    ChamadaAPI: UserSchool | undefined,
    LisReports: UserSchool | undefined
}