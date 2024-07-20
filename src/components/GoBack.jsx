import React, { Children } from 'react';
import { useNavigate } from 'react-router-dom';

function GoBack(props) {
    const navigate = useNavigate();

    return (
        <div>
              <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
}

export default GoBack;