import { semaforo, semana, fatorial, sequencia } from "./services.js"
import { Router } from "express"


const server = Router ()

server.get('/semaforo/:cor', (req, resp) => {
    const cor = req.params.cor
    const a = semaforo(cor)

    resp.send({
        cor:a
    })

})

server.get('/semana/:dia', (req, resp) => {
    const dia = req.params.dia
    const a = semana(dia) 

    resp.send({
        dia: a
    })
})

server.post('/fatorial', (req, resp)=> {
    const valor = req.query.n
    const a = fatorial(valor)

    resp.send({
        fat:a
    })
})

server.post('/sequenciaPar', (req, resp) =>{
    const n = req.body.seq
    const x = sequencia(n)
    resp.send ({
        seq : x
    })
} )
export default server
