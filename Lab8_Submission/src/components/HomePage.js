import React from 'react';

const HomePage = ({ onNavigate }) => {
    return (
        <div style={{
            color: 'white',
            backgroundColor: '#0f172a',
            minHeight: '100vh',
            padding: '40px',
            fontFamily: 'Sans-Serif',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
        }}>
            <h1 style={{ 
                fontSize: '4em', 
                marginBottom: '30px'
            }}>
                Welcome to Quiz App
            </h1>
            
            <p style={{ 
                fontSize: '1.5em', 
                marginBottom: '50px',
                color: '#94a3b8'
            }}>
                Test your knowledge!
            </p>

            <button 
                onClick={() => onNavigate('quiz')}
                style={{
                    padding: '20px 60px',
                    fontSize: '24px',
                    cursor: 'pointer',
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    border: 'none',
                    borderRadius: '10px',
                    fontWeight: 'bold'
                }}
            >
                Start Quiz
            </button>
        </div>
    );
};

export default HomePage;