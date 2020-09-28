/* Types of empty notices*/
export interface noticeType {
  type: string;
}

export interface cardType {
  type: string;
}

export interface Project {
  title: string;
  description: string;
  tasks?: Task[];
}

export enum status {
  NotStarted = "NOT STARTED",
  WIP = "WIP",
  Done = "DONE"
}

export interface Task {
  title: string;
  status?: status;
  description: string;
  project?: Project;
  startTime: Date;
  endTime: Date;
}
