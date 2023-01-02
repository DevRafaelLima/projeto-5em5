import { formatCurrentMonth } from '../../helpers/dateFilter';
import { Item } from '../../types/Item';
import { ResumeItem } from '../ResumeItem';
import * as C from './styles'
type TInfoArea = {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
    income: number;
    expense: number;

}
export const InfoArea = ({currentMonth, onMonthChange, income, expense} : TInfoArea) => {
    const handleNextMonth = () => {
        const [year, month] = currentMonth.split('-')
        let currentDate = new Date(parseInt(year), parseInt(month))
        currentDate.setMonth(currentDate.getMonth() + 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()}`)
    }

    const handlePrevMonth = () => {
        const [year, month] = currentMonth.split('-')
        let currentDate = new Date(parseInt(year), parseInt(month))
        currentDate.setMonth(currentDate.getMonth() - 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()}`)
    }
    return (
        <C.Container>
            <C.MonthArea>
                <C.MonthArrow onClick={handlePrevMonth}>⬅️</C.MonthArrow>
                <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
                <C.MonthArrow onClick={handleNextMonth}>➡️</C.MonthArrow>
            </C.MonthArea>
            <C.ResumeArea>
                <ResumeItem title='Receitas' value={income}/>
                <ResumeItem title='Despesas' value={expense}/>
                <ResumeItem 
                    title='Balanço' 
                    value={income - expense}
                    color={(income - expense) < 0 ? 'red' : 'green'}
                    />
            </C.ResumeArea>
        </C.Container>
    );
}