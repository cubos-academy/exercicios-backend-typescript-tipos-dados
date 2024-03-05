const filtrarUsuarios = (
    usuarios: {
        nome: string,
        idade: number,
        status: boolean
    }[],
    usuario: string
): {
    nome: string,
    idade: number,
    status: boolean
}[] => {
    const resultado = usuarios.filter((usuarioLista) => {
        return usuarioLista.nome.toLowerCase().includes(usuario.toLowerCase())
    });

    return resultado;
}

const lista = [
    {
        nome: "Guido",
        idade: 32,
        status: true,
    },
    {
        nome: "Dani",
        idade: 30,
        status: true,
    },
    {
        nome: "João",
        idade: 40,
        status: false,
    },
    {
        nome: "Guilherme",
        idade: 29,
        status: true,
    },
    {
        nome: "Ana",
        idade: 18,
        status: false,
    },
    {
        nome: "José",
        idade: 28,
        status: false,
    },
]

console.log(filtrarUsuarios(lista, 'jo'));