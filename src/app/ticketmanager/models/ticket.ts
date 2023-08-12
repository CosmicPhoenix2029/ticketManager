import { contact } from "./contact";
export interface ticket {
    id: number,
    subject: string,
    description: string,
    contact: contact,
    assetNumber: string,
    loggedBy: string,
    category: string,
    classification: string,
    urgency: string,
    impact: string,
    priority: string,
    status: string,
    team: string,
    leadTech: string    
}