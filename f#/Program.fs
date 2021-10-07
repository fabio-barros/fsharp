open System

let changeOrder (nome: string, sobrenome: string) = sobrenome.ToUpper() + ", " + nome

[<EntryPoint>]
let main argv =

    let name = changeOrder ("fabio", "barros")
    printfn " %s" name
    0 // return an integer exit code
