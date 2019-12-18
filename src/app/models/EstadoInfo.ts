export class EstadoInfo {
    estado: number;
    datetime: Date;

    constructor(estado?: number, datetime?: Date) {
        this.estado = estado;
        this.datetime = datetime;
    }
} 