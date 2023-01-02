import { formatDate } from '../../helpers/dateFilter';
import { Item } from '../../types/Item'
import * as C from './styles'
import {Categories} from '../../data/Categories'

type TTableItem = {
    item: Item;
}
export const TableItem = ({item} : TTableItem) => {
    return(
        <C.TableLine>
            <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
            <C.TableColumn>
                <C.Category color={Categories[item.category].color}>
                    {Categories[item.category].title}
                </C.Category>
            </C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>
                <C.Value color={Categories[item.category].expense ? 'red' : 'blue'}>
                    R$: {item.value}
                </C.Value>
            </C.TableColumn>
            
        </C.TableLine>
    )
}