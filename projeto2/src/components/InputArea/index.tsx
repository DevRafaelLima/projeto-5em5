import { useState } from 'react'
import * as C from './styles'
import { Categories } from '../../data/Categories'
import { Item } from '../../types/Item'
import { newDateAdjust } from '../../helpers/dateFilter'

type TInputArea = {
    onAdd: (item: Item) => void;
}

export const InputArea = ({onAdd}:TInputArea) => {
    const [dateField, setDateField] = useState('')
    const [valueField, setValueField] = useState(0)
    const [titleField, setTitleField] = useState('')
    const [categoryField, setCategoryField] = useState('')

    const categoryKey: string[] = Object.keys(Categories);
    const handleAddEvent = () => {
        let erros: string[] = [];

        if(isNaN(new Date(dateField).getTime())){
            erros.push('Data inválida')
        }
        if(!categoryKey.includes(categoryField)){
            erros.push('Categoria inválida')
        } 
        if (valueField <=0 ) {
            erros.push("Valor inválido")
        }
        if(titleField === '') {
            erros.push('Título inválido')
        } 

        if(erros.length > 0) {
            alert(erros.join("\n"))
        } else {
            let newItem: Item = {
                date: newDateAdjust(dateField),
                category: categoryField,
                title: titleField,
                value: valueField
            }
            onAdd(newItem)
            clearInputs();
        }
        
    }
    const clearInputs = () => {
        setCategoryField('')
        setDateField('')
        setValueField(0)
        setTitleField('')
    }
    
    return(
        <C.Container>
            <C.InputLabel>
                <C.InputTitle>Data</C.InputTitle>
                <C.Input type='date' value={dateField} onChange={(e) => setDateField(e.target.value)}/>
            </C.InputLabel>
            <C.InputLabel>
                <C.InputTitle>Categorias</C.InputTitle>
                <C.Select value={categoryField} onChange={e => setCategoryField(e.target.value)}>
                    <>
                        <option></option>
                        {categoryKey.map((item, index) => (
                            <option key={index} value={item}>{`${Categories[item].title} - ${item}`}</option>
                        ))}
                    </>
                </C.Select>
            </C.InputLabel>
            <C.InputLabel>
                <C.InputTitle>Titulo</C.InputTitle>
                <C.Input type="text" value={titleField} onChange={(e) => setTitleField(e.target.value)}/>
            </C.InputLabel>
            <C.InputLabel>
                <C.InputTitle>Valor</C.InputTitle>
                <C.Input type='number' value={valueField} onChange={e => setValueField(parseFloat(e.target.value))}/>
            </C.InputLabel>
            <C.InputLabel>
                <C.InputTitle>&nbsp;</C.InputTitle>
                <C.Button onClick={handleAddEvent}>Adicionar</C.Button>
            </C.InputLabel>
        </C.Container>
    )
}