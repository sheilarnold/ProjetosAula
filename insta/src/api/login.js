import ip_server from "./ip_server";

const efetuar_login = async(usuario, senha) => {
    //console.warn(usuario, senha);
    if(Platform.OS == "ios")
        ip_server = "localhost";

    const cabecalho_http = {
        method : "POST",
        body : JSON.stringify({
            userName: usuario,
            password: senha,
        }),
        headers: {
            "Content-type": "application/json",
        }
    };
    //console.warn(cabecalho_http);

    const resposta = await fetch(`http://${ip_server}:3030/users/login`, cabecalho_http);
    
    if(resposta.ok)
        return resposta.headers.get("x-access-token");
    else
        throw new Error("Ops! não foi possivel logar :(");

    //else

    //console.warn(resposta);
}

export default efetuar_login;