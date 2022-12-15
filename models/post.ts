export default interface Post {
  id: string;
  userId: string;
  text: string;
  mentions: string[] | null;
  answers: string[] | null;
  likes: number;
  date: Date;
  edited: boolean;
  lastVersion: string;
}
