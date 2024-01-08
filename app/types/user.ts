export interface UserInfoType {
  id: number;
  email: string;
  name: string;
  profileUrl: string;
  role: string;
  signUpWay: string;
}

export interface RegisterType {
  id: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  signUpWay: "EMAIL";
}