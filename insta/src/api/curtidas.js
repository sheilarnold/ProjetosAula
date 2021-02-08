const verifica_like = (curtiu) => {
    if(curtiu){       
        return require("../../res/img/like.png")
    }else{
      return require("../../res/img/like2.png")
    }
}

const recalcula_likes = (curtiu, like) => {
    let likes_recalculado = like;
    if(curtiu){        
        likes_recalculado--;
    }else{
        likes_recalculado++
    }
    return[!curtiu, likes_recalculado]    
}

export {verifica_like, recalcula_likes}