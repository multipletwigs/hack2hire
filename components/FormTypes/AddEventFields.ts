import { ActivityType } from "./AddActivityFields";

export interface EventType {
  name: string;
  startAt: Date;
  endAt: Date;
  location: string;
  description: string;
  creatorId: number;
  Activity: ActivityType[];
  NGOId: number;
}

export const formFields = [
  {
    name: "name",
    label: "Event Name",
    helperText: "Enter a fun name for the event",
    type: "text",
  },
  {
    name: "description",
    label: "Event Description",
    helperText: "Enter a fun short for the event",
    type: "text",
  },
  {
    name: "location",
    label: "Event Location",
    helperText: "Enter the location of the event",
    type: "text",
  },
  {
    name: "startAt",
    label: "Event Start Date",
    helperText: "When does the event start?",
    type: "datetime-local",
  },
  {
    name: "endAt",
    label: "Event End Date",
    helperText: "When does the event end?",
    type: "datetime-local",
  },
];
