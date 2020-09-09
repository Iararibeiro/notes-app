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

export interface Task {
  title: string;
  description: string;
  project?: Project;
  startTime: Date;
  endTime: Date;
}
