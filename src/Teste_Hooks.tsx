// Arquivo de teste dos hooks


import { useState, useEffect, useMemo, useCallback } from "react";

export const Teste = () => {

    //para alternar o estado do objeto (useState)
    const [age, setAge] = useState(21);
    const [name, setName] = useState('Matheus');

    //para salvar uma função (useCallback)
    const handleChangeName = useCallback(() => {
        setName(prev => prev === 'Matheus' ? 'Siquara' : 'Matheus')
    }, [age])

    const handleChangeAge = useCallback(() => {
        setAge(prev => prev === 21 ? 30 : 21)
    },[name])

    //para salver uma variável (useMemo)
    const calculo = useMemo(() => {
        return 2 * age;
    }, [age]);

    //para fazer algo com as mudanças de estado do objeto (useEffect)
    useEffect(() => {
        handleChangeAge();
    },[])

    return (
        <>
            <p>{age} e {calculo} e {name}</p>
            <button onClick={handleChangeAge}>Troca idade</button>
            <br />
            <button onClick={handleChangeName}>Troca idade</button>
        </>
    )
}