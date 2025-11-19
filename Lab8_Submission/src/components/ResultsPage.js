import React from 'react';

const ResultsPage = ({ data, onNavigate }) => {
    const { score = 0, count = 0, percentage = 0, grade = 'N/A' } = data || {};

    const getGradeColor = (grade) => {
        switch(grade) {
            case 'A': return '#4CAF50';
            case 'B': return '#8BC34A';
            case 'C': return '#FFC107';
            case 'D': return '#FF9800';
            case 'F': return '#f44336';
            default: return '#9E9E9E';
        }
    };

    return (
        <div style={{
            color: 'white',
            backgroundColor: '#1e3a8a',
            minHeight: '100vh',
            padding: '40px',
            fontFamily: 'Sans-Serif',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
        }}>
            <h1 style={{ fontSize: '3em', marginBottom: '40px' }}>Quiz Results</h1>
            
            <div style={{
                fontSize: '5em',
                fontWeight: 'bold',
                color: getGradeColor(grade),
                marginBottom: '30px'
            }}>
                {grade}
            </div>

            <div style={{ fontSize: '2em', marginBottom: '50px' }}>
                <div>Score: <strong>{score} / {count}</strong></div>
                <div style={{ marginTop: '10px' }}>
                    Percentage: <strong>{percentage}%</strong>
                </div>
            </div>

            <div>
                <button 
                    onClick={() => onNavigate('quiz')}
                    style={{
                        padding: '15px 40px',
                        fontSize: '18px',
                        marginRight: '10px',
                        cursor: 'pointer',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px'
                    }}
                >
                    Take Quiz Again
                </button>

                <button 
                    onClick={() => onNavigate('home')}
                    style={{
                        padding: '15px 40px',
                        fontSize: '18px',
                        cursor: 'pointer',
                        backgroundColor: '#2196F3',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px'
                    }}
                >
                    Home
                </button>
            </div>
        </div>
    );
};

export default ResultsPage;