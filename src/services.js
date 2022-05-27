export function semaforo (cor)
{
    let msg = "";
   
    if (cor == "vermelho")
    {
        msg = "não passa";
    }

    else if(cor == "verde")
    {
        msg = "passa";
    }
    else{
        msg = "invalido"
    }

    return msg;
}




export function semana (dia)
    {
       let msg = "";
       
       if (dia == 0)
       {
            msg = "segunda";
       }
       
        else if (dia == 1)
       {
            msg = "terça";
       }

       else if (dia == 2)
       {
            msg = "quarta";
       }

       else if (dia == 3)
       {
            msg = "quinta";
       }

       else if (dia == 4)
       {
            msg = "sexta";
       }

       else if (dia == 5)
       {
            msg = "sabado";
       }

       else
       {
            msg = "domingo";
       }

       return msg;
    }


     export function fatorial(numero){
        let a = 1;
        for(let cont = numero; cont > 1; cont--) {
            a *= cont
        }
        return a;
    }


    export function sequencia(limite)
    {
            let a = []
            let num = 0

            for(let i = 0; i <= limite ; i++) {
                a[i] = num * 2
                num++
            }
            return a;
    }