export class StepInfo {
    stepAccumulated: number;
    datetime: Date;

    constructor(stepAccumulated?: number, datetime?: Date) {
        this.stepAccumulated = stepAccumulated;
        this.datetime = datetime;
    }
} 