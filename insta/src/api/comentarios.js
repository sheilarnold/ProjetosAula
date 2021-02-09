const adicionar_comentario = ({comentario, user}) => {
    const novos_comentarios = {
        date: Date.now(),
        text: comentario,
        userName: user
    }
    //console.warn(novos_comentarios);
    return novos_comentarios;
}

export default adicionar_comentario;