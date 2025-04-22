import React from 'react';

const UpdateSoon = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>The page will be updating soon</h1>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f4f4f4',
        textAlign: 'center',
    },
    heading: {
        fontSize: '3rem',
        color: '#333',
    },
    text: {
        fontSize: '1.5rem',
        color: '#666',
    },
};

export default UpdateSoon;