export default interface User {
  id: string;
  followers: string[] | null;
  following: string[] | null;
  posts: string[] | null;
}

export interface UserInfo {
  id: string;
  email: string;
  username: string;
  name: string;
  hashPassword: string;
}
