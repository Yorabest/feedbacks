export const Button = ({type, handlerAddFeedback}) => {
    return <li>
        <button type="button" onClick={handlerAddFeedback}>{type}</button>
        </li>
}