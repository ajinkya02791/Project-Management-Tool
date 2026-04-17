import type { SetStateAction } from "react";
import type React from "react";

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
  viewMode : ViewMode;
  setViewMode : React.Dispatch<SetStateAction<ViewMode>>;
  scrollTop : number;
  setScrollTop : React.Dispatch<React.SetStateAction<number>>
  onDragStart: (event: React.DragEvent, taskId: number, fromColumn: string) => void;
  onDragOver: (event: React.DragEvent) => void;
  onDrop: (event: React.DragEvent, toColumn: string) => void;
  taskCount : number;
}


export type ViewMode = "kaban" | "list" | "gantt"