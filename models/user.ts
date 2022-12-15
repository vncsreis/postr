export default interface User {
  id: string;
  followers: string[] | null;
  following: string[] | null;
  posts: string[] | null;
  email: string;
  username: string;
  name: string;
  hashPassword: string;
}

export interface UserInfo {
  id: string;
  username: string;
  name: string;
}
