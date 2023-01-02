import * as C from './styles'
type TResumeItem = {
    title: string;
    value: number;
    color?: string;
}
export const ResumeItem = ({title, value, color} : TResumeItem) => {
    return (
        <C.Container>
            <C.Title>{title}</C.Title>
            <C.Info color={color}>R$: {value}</C.Info>
        </C.Container>
    )
}