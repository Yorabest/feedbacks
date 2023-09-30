import { Button, Text } from "./ToDo.styled"

export const ToDoItem = ({id, text, handlerDeleteItem, completed, onChange}) => {
    return <>
        <label>
                <input type="checkbox" name="done" checked={completed} onChange={(e)=>{onChange(id, e)}}/>
            </label>
        <Text completed={completed}>{text}</Text>
        <Button type="button" onClick={handlerDeleteItem}>Delete</Button>
    </>
}
