const geradorEtiquetas = (info: {
    produto: string,
    lote: number,
    ano: number,
    qtd: number
}): string[] => {
    const resultado: string[] = [];

    for (let i = 1; i <= info.qtd; i++) {
        resultado.push(`${info.lote}-${info.ano}-${i.toString().padStart(3, '0')}`);
    }

    return resultado;
}

console.log(geradorEtiquetas({
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 5
}));
