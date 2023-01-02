import { Item } from '../../types/Item'
import { TableItem } from '../TableItem'
import * as C from './styled'

type TTableArea = {
    items: Item[]
}
export const TableArea  = ({items}: TTableArea) => {
    return(
        <C.Table>
            <thead>
                <C.TableHeadColumn width='100'>data</C.TableHeadColumn>
                <C.TableHeadColumn width='130'>categoria</C.TableHeadColumn>
                <C.TableHeadColumn>titulo</C.TableHeadColumn>
                <C.TableHeadColumn width='150'>valor</C.TableHeadColumn>
            </thead>
            <tbody>
                {items.map((item, index) => (
                    <TableItem item={item} key={index}/>
                ))}
            </tbody>
        </C.Table>
    )
}