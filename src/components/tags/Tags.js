import React from 'react';

const TagList = ({ tags }) => {
    if (!tags || !Array.isArray(tags)) {
        return null;
    }
    console.log('TagList props:', tags); // Add this line for debugging

    return (
        <ul>
            {tags.map((tag, index) => (
                <li key={index}>{tag}</li>
            ))}
        </ul>
    );
};

export default TagList;