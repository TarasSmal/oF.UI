export interface Notification {
  type: string;
  createdOn?: Date;
  title: string;
  isDeleted?: boolean;
  state?: string;
}
