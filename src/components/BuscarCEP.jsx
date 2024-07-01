import { useState } from "react"

export default function BuscarCEP() {
    const [cep, setCep] = useState('')
    const [endereco, setEndereco] = useState(null)
    const [erro, setErro] = useState(null)

    const fetchData = async () => {
        try {
            const response = await fetch(` https://viacep.com.br/ws/${cep}/json/`)// link do docs
            const data = await response.json()
            setEndereco(data)
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div className="content">
            <h1>Buscar endereco por CEP</h1>
            <input
                type="text"
                value={cep}
                placeholder="Digite aqui"
                onChange={(e) => setCep(e.target.value)}
            ></input>
            <button onClick={fetchData}>Buscar</button>
            {erro &&(
                <p>CEP não encontrado. </p>
            )}
            {endereco && (
                <div>
                    <p>Rua: {endereco.logradouro}</p>
                    <p>Bairro: {endereco.bairro}</p>
                    <p>Cidade: {endereco.localidade}</p>
                    <p>UF: {endereco.uf}</p>
                </div>

            )}
        </div>
    )
}