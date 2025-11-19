// src/components/Quiz.js
import React from 'react';
import quizPageStyle from '../QuizPageStyle';
import my_questions from '../model/basic_questions.json';
import ScoreController from '../controllers/ScoreController';

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.scoreController = new ScoreController();
        this.state = {
            score: 0,
            count: 0,
            selectedAnswers: {}
        };
    }
    
    handleAnswerClick = (questionId, isCorrect) => {
        // Prevent multiple clicks on the same question
        if (this.state.selectedAnswers[questionId] !== undefined) {
            alert("You already answered this question!");
            return;
        }

        let result;
        if (isCorrect) {
            result = this.scoreController.incrementScore();
        } else {
            result = this.scoreController.incrementCount();
        }

        this.setState({
            score: result.score,
            count: result.count,
            selectedAnswers: {
                ...this.state.selectedAnswers,
                [questionId]: isCorrect
            }
        }, () => {
            // Alert after state is updated
            alert(result.message);
        });
    };

    handleSubmit = () => {
        const totalScore = this.scoreController.getTotalScore();
        const percentage = this.scoreController.getPercentage();
        const grade = this.scoreController.calculateGrade();
        
        alert(`${totalScore}\nPercentage: ${percentage}%\nGrade: ${grade}`);
    };

    handleReset = () => {
        this.scoreController.reset();
        this.setState({
            score: 0,
            count: 0,
            selectedAnswers: {}
        });
    };

    navigateToResults = () => {
        if (this.props.onNavigate) {
            this.props.onNavigate('results', {
                score: this.state.score,
                count: this.state.count,
                percentage: this.scoreController.getPercentage(),
                grade: this.scoreController.calculateGrade()
            });
        }
    };
    
    render() {
        return (
            <div style={quizPageStyle}>
                <h1>My Questions</h1>
                <div style={{ marginBottom: '20px', fontSize: '1.2em' }}>
                    <strong>Score: {this.state.score}/{this.state.count}</strong>
                </div>
                
                {my_questions.map((quest) => (
                    <div key={quest.id} style={{ 
                        marginBottom: '30px', 
                        padding: '20px', 
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '10px'
                    }}> 
                        <h2>{quest.question}</h2>
                        {quest.answers.map((ans, index) => (
                            <div key={index} style={{ textAlign: 'left', marginLeft: '20px' }}>
                                <label style={{ 
                                    cursor: this.state.selectedAnswers[quest.id] !== undefined ? 'not-allowed' : 'pointer',
                                    display: 'block', 
                                    padding: '5px',
                                    opacity: this.state.selectedAnswers[quest.id] !== undefined ? 0.6 : 1
                                }}>
                                    <input  
                                        type="radio"
                                        name={`question-${quest.id}`}
                                        checked={this.state.selectedAnswers[quest.id] !== undefined && 
                                                this.state.selectedAnswers[quest.id] === ans.isCorrect}
                                        onChange={() => {
                                            if (this.state.selectedAnswers[quest.id] === undefined) {
                                                this.handleAnswerClick(quest.id, ans.isCorrect);
                                            }
                                        }}
                                        disabled={this.state.selectedAnswers[quest.id] !== undefined}
                                        value={index}
                                        style={{ cursor: this.state.selectedAnswers[quest.id] !== undefined ? 'not-allowed' : 'pointer' }}
                                    /> 
                                    {' ' + ans.answer}
                                </label> 
                            </div>
                        ))}
                    </div>
                ))}
                
                <div style={{ marginTop: '30px' }}>
                    <button 
                        onClick={this.handleSubmit}
                        style={{
                            padding: '15px 30px',
                            fontSize: '18px',
                            marginRight: '10px',
                            cursor: 'pointer',
                            backgroundColor: '#4CAF50',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px'
                        }}
                    >
                        Submit
                    </button>
                    
                    <button 
                        onClick={this.handleReset}
                        style={{
                            padding: '15px 30px',
                            fontSize: '18px',
                            marginRight: '10px',
                            cursor: 'pointer',
                            backgroundColor: '#f44336',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px'
                        }}
                    >
                        Reset
                    </button>

                    <button 
                        onClick={this.navigateToResults}
                        style={{
                            padding: '15px 30px',
                            fontSize: '18px',
                            cursor: 'pointer',
                            backgroundColor: '#2196F3',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px'
                        }}
                    >
                        View Results
                    </button>
                </div>
            </div>
        );
    }
}

export default Quiz;