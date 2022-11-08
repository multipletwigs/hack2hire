export interface ActivityType {
    name: string;
    description: string;
}

export const activityFormFields = [
    {
        name: "name",
        description: "Activity Name",
        label: "Activity Name",
        helperText: "Enter a fun name for the activity",
        type: "text",
    },{
        name: "description",
        description: "Activity Description",
        label: "Activity Description",
        helperText: "Enter a fun short for the activity",
        type: "text",
    }
]