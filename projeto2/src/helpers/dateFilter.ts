import { Item } from "../types/Item"

const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Dezembro'
]
export const filterCurrentMonth = (date: string, list: Item[]): Item[] => {
    let newItem: Item[];
    let [year, month] = date.split('-');

    newItem = list.filter(Item => Item.date.getFullYear() === parseInt(year) && Item.date.getMonth() === parseInt(month))

    return newItem;
}

export const getCurrentMonth = (): string => {
    let date = new Date();
    return `${date.getFullYear()}-${date.getMonth()}`;
}

export const formatDate = (date: Date): string => {
    let year = addzero(date.getFullYear());
    let month = addzero(date.getMonth() + 1);

    return `${month}/${year}`;
}


export const formatCurrentMonth = (date: string): string => {
    const [year, month] = date.split('-')
    return `${months[parseInt(month)]} de ${year}`;
}

const addzero = (month: number): string => {
    return month < 10 ? `0${month}` : `${month}`;
}

export const newDateAdjust = (date: string):Date => {
    const [year, month, day] = date.split('-')
    return new Date(parseInt(year), parseInt(month)-1, parseInt(day))
}
