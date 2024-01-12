import './formIMC.css'

import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'

export default function FormIMC(){
    
    const navigate = useNavigate()

    const [peso, setPeso] = useState('')
    const [altura, setAltura] = useState('')
    const [idade, setIdade] = useState('')
    const [atividade, setAtividade] = useState('')
    const [sexo, setSexo] = useState<string | any>('')
    const [objetivo, setObjetivo] = useState('')

    const listaFrequenciaAtividade = [
        '',
        'Leve',
        'Moderado',
        'Muito ativo',
        'Extremamente ativo',
    ]

    const sexos = [
        'Masculino',
        'Feminino'
    ] 

    const objetivos = [
        '',
        'Perder peso',
        'Manter forma',
        'Ganhar massa'
    ]

    useEffect(() => {
        const savedDataPeso = localStorage.getItem('savedDataPeso')
        const savedDataAltura = localStorage.getItem('savedDataAltura')
        const savedDataIdade = localStorage.getItem('savedDataIdade')
        const savedDataAtividade = localStorage.getItem('savedDataAtividade')
        const savedDataSexo = localStorage.getItem('savedDataSexo')
        const savedDataObjetivo = localStorage.getItem('savedDataObjetivo')

        if(savedDataPeso){
            setPeso(savedDataPeso)
        }
        if(savedDataAltura){
            setAltura(savedDataAltura)
        }
        if(savedDataIdade){
            setIdade(savedDataIdade)
        }
        if(savedDataAtividade){
            setAtividade(savedDataAtividade)
        }
        if(savedDataSexo){
            setSexo(savedDataSexo)
        }
        if(savedDataObjetivo){
            setObjetivo(savedDataObjetivo)
        }

    },[])

    useEffect(() => {
        localStorage.setItem('savedData', peso)
        localStorage.setItem('savedData', altura)
        localStorage.setItem('savedData', idade)
        localStorage.setItem('savedData', atividade)
        localStorage.setItem('savedData', sexo)
        localStorage.setItem('savedData', objetivo)

    },[peso,altura,idade,sexo,objetivo])

    function calcular(){
        navigate(`/resultado?pesoParam=${encodeURIComponent(peso)}&alturaParam=${encodeURIComponent(altura)}&idadeParam=${encodeURIComponent(idade)}&atividadeParam=${encodeURIComponent(atividade)}&sexoParam=${encodeURIComponent(sexo)}&objetivoParam=${encodeURIComponent(objetivo)}`)
    }

    return(
        <form 
            className='formDados'
            onSubmit={calcular}
        >
            <div className="tituloForm">
                <h2>Calcule IMC</h2>

                <p>
                    Seja bem-vindo ao <b>CALCULE IMC</b> . Preencha seus dados nos campos abaixo para o aplicativo calcular o seu <br /> 
                    <b>Plano Personalizado.</b>
                </p>
            </div>

            <input 
                type="number" 
                placeholder="Idade"
                onChange={e => setIdade(e.target.value)}
            />

            <input 
                type="number" 
                placeholder="Peso (Em quilos - KG)"
                onChange={e => setPeso(e.target.value)}
            />

            <input 
                type="number" 
                placeholder="Altura (Em Centímetros - CM)"
                onChange={e => setAltura(e.target.value)}
            />

            <h3>Qual é seu sexo?</h3>

            <div className="sexoInput">
                {sexos.map(sexo => (
                    <div className='sexo' key={sexo}>
                        <input 
                            type='radio' 
                            name='sexo'
                            value={sexo}
                            onClick={() => setSexo(sexo)}
                        />
                        <label>{sexo}</label>
                    </div>
                ))}
            </div>

            <h3>Qual é seu nível de atividade diária?</h3>
            <div className="nivelAtividadeSelect">
                <select 
                    required
                    onChange={e => setAtividade(e.target.value)}
                >
                    {listaFrequenciaAtividade.map(nivel => (
                        <option key={nivel}>
                            {nivel}
                        </option>
                    ))}
                </select>
            </div>  

            <h3>Qual é seu objetivo?</h3>
            <div className="objetivoSelect">
                <select 
                    required
                    onChange={e => setObjetivo(e.target.value)}
                >
                    {objetivos.map(objetivo => (
                        <option key={objetivo}>
                            {objetivo}
                        </option>
                    ))}
                </select>
            </div>  

            <button>Calcular</button>
        </form>
    )
}