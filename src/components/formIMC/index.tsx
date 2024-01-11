import './formIMC.css'

import { useState } from "react"

export default function FormIMC(){

    const [idade, setIdade] = useState('')
    const [peso, setPeso] = useState('')
    const [altura, setAltura] = useState('')
    const [pesoDesejado, setPesoDesejado] = useState('')
    const [atividade, setAtividade] = useState('')

    const listaNiveisAtividade = [
        '',
        'Sedentário',
        'Pouco ativo',
        'Ativo',
        'Muito ativo',
    ]

    const sexos = [
        'Masculino',
        'Feminino'
    ]

    return(
        <form className='formDados'>
            <div className="tituloForm">
                <h2>Calcule IMC</h2>

                <p>
                    Seja bem-vindo ao <b>CALCULE IMC</b> . Preencha seus dados nos campos abaixo para o aplicativo calcular o seu <br /> 
                    <b>Plano Personalizado.</b>
                </p>
            </div>

            <input 
                required
                type="number" 
                placeholder="Idade"
                onChange={e => setIdade(e.target.value)}
            />

            <input 
                required
                type="number" 
                placeholder="Peso (Em quilos - KG)"
                onChange={e => setPeso(e.target.value)}
            />

            <input 
                required
                type="number" 
                placeholder="Altura (Em Centímetros - CM)"
                onChange={e => setAltura(e.target.value)}
            />

            <input 
                required
                type="number" 
                placeholder="Peso desejado (Em quilos - KG)"
                onChange={e => setPesoDesejado(e.target.value)}
            />
            
            <h3>Qual é seu sexo?</h3>
            <div className="sexoInput">
                {sexos.map(sexo => (
                    <div className='sexo'>
                        <input 
                            type='radio' 
                            name='sexo'
                            value={sexo}
                        />
                        <label>{sexo}</label>
                    </div>
                ))}
            </div>
            

            <h3>Qual é seu nível de atividade diária?</h3>
            <div className="nivelAtividadeSelect">
                <select 
                    onChange={e => setAtividade(e.target.value)}
                    required
                >
                    {listaNiveisAtividade.map(nivel => (
                        <option key={nivel}>
                            {nivel}
                        </option>
                    ))}
                </select>
            </div>

            <button>Calcular</button>
        </form>
    )
}