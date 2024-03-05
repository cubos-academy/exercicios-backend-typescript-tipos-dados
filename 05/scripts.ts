const soletrando = (texto: string): string => {
    return texto.split('').join('-');
}

console.log(soletrando('Nany'));