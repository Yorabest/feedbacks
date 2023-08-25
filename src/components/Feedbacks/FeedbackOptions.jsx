import { Button } from "./FeedbacksItems/Buttons";

export const FeedbackOptions = ({good, neutral, bad}) => {
    return <>
    <ul>
                <Button
                    type='Good'
                    handlerAddFeedback={good}
                />
                <Button
                    type='Neutral'
                    handlerAddFeedback={neutral}
                />
                <Button
                    type='Bad'
                    handlerAddFeedback={bad}
                />
        </ul>
    </>
}