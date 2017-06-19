export interface IResetPassword {
    idUser: string;
    idToken: string;
    newPassword: string;
    retryPassword: string;
}
