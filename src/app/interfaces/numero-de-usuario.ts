export interface numus {
    usuarioid: string;
    areas:     Area[];
}

export interface Area {
    numero:     number;
    atendiendo: boolean;
    areaid:     number;
}
