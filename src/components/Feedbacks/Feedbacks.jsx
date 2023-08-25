import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Section } from 'components/Section/Section';
import { Notification } from './Notification';


export class Feedbacks extends Component{

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    handlerAddGoodFeedback = () => {
        this.setState((prev) => ({
            good: prev.good + 1
        }))
    }

    handlerAddNeutralFeedback = () => {
        this.setState((prev) => ({
            neutral: prev.neutral + 1
        }))
    }

    handlerAddBadFeedback = () => {
        this.setState((prev) => ({
            bad: prev.bad + 1
        }))
    }

    countTotalFaadback = () => {
        return this.state.good + this.state.neutral + this.state.bad
    }

    countPositiveFeedbackPercentage = () => {
        const total = this.countTotalFaadback()
        const precentage = this.state.good / total * 100
        return `${Math.round(precentage)}%`
    }

    render() {
        return <>
            <Section title='Please leave feedback'>
            <FeedbackOptions
                good={this.handlerAddGoodFeedback}
                neutral={this.handlerAddNeutralFeedback}
                bad={this.handlerAddBadFeedback}
            />
            </Section>
            {this.countTotalFaadback() ? <> 
            <Section title='Statistics'>
            <Statistics
                good={this.state.good }
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFaadback()}
                positivePrecentage={this.countPositiveFeedbackPercentage()}
            />
                </Section>
            </> : <Section title='Statistics'><Notification message='There is no feedback' /></Section>}
           
        </>
    }
}