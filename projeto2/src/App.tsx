import { useEffect, useState } from 'react';

import * as C from './App.styled';
import {Item} from './types/Item';
import {Items} from './data/Items';
import {Category} from './types/Category';
import {Categories} from './data/Categories';
import { filterCurrentMonth, getCurrentMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';
import { InputArea } from './components/InputArea';

const App = () => {
  const [list, setList] = useState(Items);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
  const [currentList, setCurrentList] = useState<Item[]>([])
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)
  
  useEffect(() => {
    setCurrentList(filterCurrentMonth(currentMonth, list))
  }, [list, currentMonth])

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    // eslint-disable-next-line array-callback-return
    currentList.filter(item => {
      if(Categories[item.category].expense) {
        expenseCount += item.value;
      } else {
        incomeCount += item.value
      }
    })
    setIncome(incomeCount)
    setExpense(expenseCount)
    
  },[currentList])

  const addItem = (item: Item) => {
    let newList = [...list]
    newList.push(item)
    setList(newList)
  }
  return (
     <C.Container>
        <C.Header>
          <C.HeaderText>Controle Financeiro</C.HeaderText>
        </C.Header>

        <C.Body>
          <InfoArea 
            currentMonth={currentMonth}
            onMonthChange={setCurrentMonth}
            income={income}
            expense={expense}
          />


          <InputArea onAdd={addItem}/>


          <TableArea items={currentList}/>
        </C.Body>
     </C.Container>

  )
}

export default App;