export const Button = ({type, handlerAddFeedback, use}) => {
    return <li>
        <button type="button" onClick={()=>{handlerAddFeedback(use)}}>{type}</button>
        </li>
}