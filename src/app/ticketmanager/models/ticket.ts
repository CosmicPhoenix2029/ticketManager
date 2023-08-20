
export interface ticket {
    id: number,
    subject: string,
    description: string,
    notes: string,
    contact: object,
    assetNumber: string,
    loggedBy: string,
    loggedDate: Date;
    category: string,
    classification: string,
    impact: string,
    priority: string,
    status: string,
    team: string,
    leadTech: string    
}