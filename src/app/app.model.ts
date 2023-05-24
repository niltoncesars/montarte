export class Param {
    name: string;
    description?: string;
    value?: number;
    maxValue?: number;
    minValue?: number;
}

export class Result extends Param {
    formule: string;
}

export class Calculo {
    name: string
    description: string
    img: string;
    inputs: Param[];
    results: Result[];
}

export const CALCULOS: Calculo[] = [{
    name: 'Plano Linear',
    description: 'Superficies plana e sem curvas',
    img: 'res://ic_calc_linear',
    inputs: [
        { name: 'Quantidade de Montante Stili', value: 0 },
        { name: 'Soleira de rodape', value: 0 },
        { name: 'Borda final', value: 0 },
        { name: 'Altura do Guarda Corpo', value: 0 },
        { name: 'Faixa inferior sem vidro', value: 0 }
    ],
    results: []
}]
