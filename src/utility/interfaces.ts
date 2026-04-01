export interface Task {
id : number,
title : string,
assigns : string,
tag : string,
status : string,
dateStart : Date,
dateEnd : Date
}


export interface TaskContextType {
  tasks: Task[];
  onDragStart: (event: React.DragEvent, taskId: number, fromColumn: string) => void;
  onDragOver: (event: React.DragEvent) => void;
  onDrop: (event: React.DragEvent, toColumn: string) => void;
}


export type ViewMode = "kaban" | "list" | "gantt"