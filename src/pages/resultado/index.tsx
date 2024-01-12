import './Resultado.css'

import { useLocation } from 'react-router-dom'

import { useState, useEffect } from 'react'

export default function Resultado(){

    const locationHook = useLocation()

    const [peso, setPeso] = useState<string | number>('')
    const [altura, setAltura] = useState<string | number>('')
    const [idade, setIdade] = useState<string | number>('')
    const [atividade, setAtividade] = useState<string>('')
    const [sexo, setSexo] = useState<string>('')
    const [objetivo, setObjetivo] = useState('')

    const [imc, setImc] = useState<string | number>('')
    const [classificacao, setClassificacao] = useState<string>('')
    const [ingestaoCaloria, setIngestaoCaloria] = useState<string | number>('')
    const [ingestaoAgua, setIngestaoAgua] = useState<string | number>('')
    const [ingestaoProteina, setIngestaoProteina] = useState<string | number>('')
    const [ingestaoCarboidrato, setIngestaoCarboidrato] = useState<string | number>('')
    const [ingestaoGordura, setIngestaoGordura] = useState<string | number>('')

    useEffect(() => {
        const queryParams = new URLSearchParams(locationHook.search)

        const pesoParam = queryParams.get('pesoParam')
        const alturaParam = queryParams.get('alturaParam')
        const idadeParam = queryParams.get('idadeParam')
        const atividadeParam = queryParams.get('atividadeParam')
        const sexoParam = queryParams.get('sexoParam')
        const objetivoParam = queryParams.get('objetivoParam')

        if(pesoParam){
            setPeso(decodeURIComponent(pesoParam))
        }
        if(alturaParam){
            setAltura(decodeURIComponent(alturaParam))
        }
        if(idadeParam){
            setIdade(decodeURIComponent(idadeParam))
        }
        if(atividadeParam){
            setAtividade(decodeURIComponent(atividadeParam))
        }
        if(sexoParam){
            setSexo(decodeURIComponent(sexoParam))
        }
        if(objetivoParam){
            setObjetivo(decodeURIComponent(objetivoParam))
        }

        /* IMC */

        const peso = Number(pesoParam)
        const altura = Number(alturaParam) / 100

        const contaImc = (peso / (altura * altura)).toFixed(1)

        setImc(contaImc)

        /* CLASSIFICACAO */

        if(contaImc <= '16.9'){
            setClassificacao('Muito abaixo do peso')
    
        }else if(contaImc >= '17' && contaImc <= '18.4'){
            setClassificacao('Abaixo do peso')
    
        }else if(contaImc >= '18.5' && contaImc <= '24.9'){
            setClassificacao('Peso normal')
    
        }else if(contaImc >= '25' && contaImc <= '29.9'){
            setClassificacao('Acima do peso')
    
        }else if(contaImc >= '30' && contaImc <= '34.9'){
            setClassificacao('Obesidade 1')
    
        }else if(contaImc >= '35' && contaImc < '40'){
            setClassificacao('Obesidade 2')
     
        }else if(contaImc >= '40'){
            setClassificacao('Obesidade 3')
    
        }else{ 
            setClassificacao('Nao classificado')
    
        }

        /* INGESTAO DE AGUA */

        var contaIngestaoAgua = peso * 30 - 35

        if(atividadeParam == 'Sedentário'){
            setIngestaoAgua((contaIngestaoAgua).toFixed(1))
            
        }else if(atividadeParam == 'Leve'){
            setIngestaoAgua((contaIngestaoAgua + 250).toFixed(1))
            
        }else if(atividadeParam == 'Moderado'){
            setIngestaoAgua((contaIngestaoAgua + 500).toFixed(1))

        }else if(atividadeParam == 'Muito ativo'){
            setIngestaoAgua((contaIngestaoAgua + 750).toFixed(1))

        }else if(atividadeParam == 'Extremamente ativo'){
            setIngestaoAgua((contaIngestaoAgua + 1000).toFixed(1))

        }

        /* INGESTÃO DE CALORIAS */
       
        let idade = Number(idadeParam)
        let alturaCM = Number(alturaParam)

        if(sexoParam == 'Masculino'){ /* MASCULINO */
            const metabolicoBasalMasculino = 88.362+(13.397*peso)+(4.799*alturaCM)-(5.677*idade)
            
            if(atividadeParam == 'Sedentário'){ /* SEDENTARIO MASCULINO*/
               const fatorAtividade = metabolicoBasalMasculino * 1.2

               if(objetivoParam == 'Perder peso'){
                    const gastoCalorico = fatorAtividade - 750
                    setIngestaoCaloria((gastoCalorico).toFixed(1))
                    
                }else if(objetivoParam == 'Manter forma'){
                   const gastoCalorico = fatorAtividade
                   setIngestaoCaloria((gastoCalorico).toFixed(1))
                   
                }else if(objetivoParam == 'Ganhar massa'){
                   const gastoCalorico = fatorAtividade + 350
                   setIngestaoCaloria((gastoCalorico).toFixed(1))

               }
               
            }else if(atividadeParam == 'Leve'){ /* LEVE MASCULINO*/
                const fatorAtividade = metabolicoBasalMasculino * 1.375

                if(objetivoParam == 'Perder peso'){
                    const gastoCalorico = fatorAtividade - 750
                    setIngestaoCaloria((gastoCalorico).toFixed(1))
                    
                }else if(objetivoParam == 'Manter forma'){
                   const gastoCalorico = fatorAtividade
                   setIngestaoCaloria((gastoCalorico).toFixed(1))
                   
                }else if(objetivoParam == 'Ganhar massa'){
                   const gastoCalorico = fatorAtividade + 350
                   setIngestaoCaloria((gastoCalorico).toFixed(1))

               }
                
                
            }else if(atividadeParam == 'Moderado'){ /* MODERADO MASCULINO*/
                const fatorAtividade = metabolicoBasalMasculino * 1.55

                if(objetivoParam == 'Perder peso'){
                    const gastoCalorico = fatorAtividade - 750
                    setIngestaoCaloria((gastoCalorico).toFixed(1))
                    
                }else if(objetivoParam == 'Manter forma'){
                   const gastoCalorico = fatorAtividade
                   setIngestaoCaloria((gastoCalorico).toFixed(1))
                   
                }else if(objetivoParam == 'Ganhar massa'){
                   const gastoCalorico = fatorAtividade + 350
                   setIngestaoCaloria((gastoCalorico).toFixed(1))

               }
                
                
            }else if(atividadeParam == 'Muito ativo'){ /* MUITO ATIVO MASCULINO*/
                const fatorAtividade = metabolicoBasalMasculino * 1.725

                if(objetivoParam == 'Perder peso'){
                    const gastoCalorico = fatorAtividade - 750
                    setIngestaoCaloria((gastoCalorico).toFixed(1))
                    
                }else if(objetivoParam == 'Manter forma'){
                   const gastoCalorico = fatorAtividade
                   setIngestaoCaloria((gastoCalorico).toFixed(1))
                   
                }else if(objetivoParam == 'Ganhar massa'){
                   const gastoCalorico = fatorAtividade + 350
                   setIngestaoCaloria((gastoCalorico).toFixed(1))

               }
                
                
            }else if(atividadeParam == 'Extremamente ativo'){ /* EXTREMAMENTE ATIVO MASCULINO*/
                const fatorAtividade = metabolicoBasalMasculino * 1.9

                if(objetivoParam == 'Perder peso'){
                    const gastoCalorico = fatorAtividade - 750
                    setIngestaoCaloria((gastoCalorico).toFixed(1))
                    
                }else if(objetivoParam == 'Manter forma'){
                   const gastoCalorico = fatorAtividade
                   setIngestaoCaloria((gastoCalorico).toFixed(1))
                   
                }else if(objetivoParam == 'Ganhar massa'){
                   const gastoCalorico = fatorAtividade + 350
                   setIngestaoCaloria((gastoCalorico).toFixed(1))

               }
               
            }

        }

        

        if(sexoParam == 'Feminino'){ /* FEMININO */
            const metabolicoBasalFeminino = 447.593+(9.247 * peso)+(3.098 * alturaCM)-(4.330*idade)

            if(atividadeParam == 'Sedentário'){ /* SEDENTARIO FEMININO*/
                const fatorAtividade = metabolicoBasalFeminino * 1.2
 
                if(objetivoParam == 'Perder peso'){
                     const gastoCalorico = fatorAtividade - 750
                     setIngestaoCaloria((gastoCalorico).toFixed(1))
                     
                 }else if(objetivoParam == 'Manter forma'){
                    const gastoCalorico = fatorAtividade
                    setIngestaoCaloria((gastoCalorico).toFixed(1))
                    
                 }else if(objetivoParam == 'Ganhar massa'){
                    const gastoCalorico = fatorAtividade + 350
                    setIngestaoCaloria((gastoCalorico).toFixed(1))
 
                }
                
            }else if(atividadeParam == 'Leve'){ /* LEVE FEMININO*/
                const fatorAtividade = metabolicoBasalFeminino * 1.375

                if(objetivoParam == 'Perder peso'){
                    const gastoCalorico = fatorAtividade - 750
                    setIngestaoCaloria((gastoCalorico).toFixed(1))
                    
                }else if(objetivoParam == 'Manter forma'){
                   const gastoCalorico = fatorAtividade
                   setIngestaoCaloria((gastoCalorico).toFixed(1))
                   
                }else if(objetivoParam == 'Ganhar massa'){
                   const gastoCalorico = fatorAtividade + 350
                   setIngestaoCaloria((gastoCalorico).toFixed(1))

               }
                
            }else if(atividadeParam == 'Moderado'){ /* MODERADO FEMININO*/
                const fatorAtividade = metabolicoBasalFeminino * 1.55

                if(objetivoParam == 'Perder peso'){
                    const gastoCalorico = fatorAtividade - 750
                    setIngestaoCaloria((gastoCalorico).toFixed(1))
                    
                }else if(objetivoParam == 'Manter forma'){
                const gastoCalorico = fatorAtividade
                setIngestaoCaloria((gastoCalorico).toFixed(1))
                
                }else if(objetivoParam == 'Ganhar massa'){
                const gastoCalorico = fatorAtividade + 350
                setIngestaoCaloria((gastoCalorico).toFixed(1))

            }
    
            }else if(atividadeParam == 'Muito ativo'){ /* MUITO ATIVO FEMININO*/
                const fatorAtividade = metabolicoBasalFeminino * 1.725

                if(objetivoParam == 'Perder peso'){
                    const gastoCalorico = fatorAtividade - 750
                    setIngestaoCaloria((gastoCalorico).toFixed(1))
                    
                }else if(objetivoParam == 'Manter forma'){
                const gastoCalorico = fatorAtividade
                setIngestaoCaloria((gastoCalorico).toFixed(1))
                
                }else if(objetivoParam == 'Ganhar massa'){
                const gastoCalorico = fatorAtividade + 350
                setIngestaoCaloria((gastoCalorico).toFixed(1))

            }
     
            }else if(atividadeParam == 'Extremamente ativo'){ /* EXTREMAMENTE ATIVO FEMININO*/
                const fatorAtividade = metabolicoBasalFeminino * 1.9

                if(objetivoParam == 'Perder peso'){
                    const gastoCalorico = fatorAtividade - 750
                    setIngestaoCaloria((gastoCalorico).toFixed(1))
                    
                }else if(objetivoParam == 'Manter forma'){
                    const gastoCalorico = fatorAtividade
                    setIngestaoCaloria((gastoCalorico).toFixed(1))
                    
                }else if(objetivoParam == 'Ganhar massa'){
                    const gastoCalorico = fatorAtividade + 350
                    setIngestaoCaloria((gastoCalorico).toFixed(1))

                }
                
            }

        }

        /* INGESTAO DE PROTEINAS */

        if(atividadeParam == 'Sedentário'){
            const proteinasSendentario = peso * 1.2
            setIngestaoProteina((proteinasSendentario).toFixed(1))
            
        }else if(atividadeParam == 'Leve'){
            const proteinasLeve = peso * 1.4
            setIngestaoProteina((proteinasLeve).toFixed(1))
            
        }else if(atividadeParam == 'Moderado'){
            const proteinasModerado = peso * 1.6
            setIngestaoProteina((proteinasModerado).toFixed(1))
            
        }else if(atividadeParam == 'Muito ativo'){
            const proteinasMuitoAtivo = peso * 1.8
            setIngestaoProteina((proteinasMuitoAtivo).toFixed(1))
            
        }else if(atividadeParam == 'Extremamente ativo'){
            const proteinasExtremamenteAtivo = peso * 2.0
            setIngestaoProteina((proteinasExtremamenteAtivo).toFixed(1))

        }

        /* INGESTAO CARBOIDRATOS */

        if(atividadeParam == 'Sedentário'){
            const carboidratosSendentario = peso * 2
            setIngestaoCarboidrato((carboidratosSendentario).toFixed(1))
            
        }else if(atividadeParam == 'Leve'){
            const carboidratosLeve = peso * 3
            setIngestaoCarboidrato((carboidratosLeve).toFixed(1))
            
        }else if(atividadeParam == 'Moderado'){
            const carboidratosModerado = peso * 5
            setIngestaoCarboidrato((carboidratosModerado).toFixed(1))
            
        }else if(atividadeParam == 'Muito ativo'){
            const carboidratosMuitoAtivo = peso * 6
            setIngestaoCarboidrato((carboidratosMuitoAtivo).toFixed(1))
            
        }else if(atividadeParam == 'Extremamente ativo'){
            const carboidratosExtremamenteAtivo = peso * 8
            setIngestaoCarboidrato((carboidratosExtremamenteAtivo).toFixed(1))

        }

        /* INGESTAO GORDURAS */

        const contaPorcentagemGorduras = (0.30 * Number(ingestaoCaloria))
        const contaIngestaoGordura = contaPorcentagemGorduras / 9
        setIngestaoGordura((contaIngestaoGordura).toFixed(1))

    },[locationHook.search])


    return(
        <div>
            idade: {idade} <br />
            peso: {peso} <br />
            altura: {altura} <br />
            sexo: {sexo} <br />
            objetivo: {objetivo} <br /> 
            nivel atividade: {atividade} <br /> <br />

            imc: {imc} <br />
            classificacao: {classificacao} <br />
            ingestao de agua: {ingestaoAgua} <br />
            ingestao de calorias: {ingestaoCaloria} <br />
            ingestao proteinas: {ingestaoProteina} <br />
            ingestao carboidratos: {ingestaoCarboidrato} <br />
            ingestao gordura: {ingestaoGordura} <br /> 
        </div>
    )
}