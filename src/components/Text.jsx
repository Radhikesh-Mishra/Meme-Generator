import React,{ useState } from "react";
import Draggable from "react-draggable";

const Text = () => {
    const [val, setVal] = useState('Double click to edit');
    const [editMode, setEditMode] = useState(false);

    return(
        <div className="draggable-container">
        <Draggable>
          <div className="draggable-content">
            {editMode ? (
              <input 
                value={val} 
                onChange={(e) => setVal(e.target.value)} 
                onDoubleClick={(e) => setEditMode(false)}
                className="editable-input"
              />
            ) : (
              <h3 
                onDoubleClick={(e) => setEditMode(true)}
                className="editable-text"
              >
                {val}
              </h3>
            )}
          </div>
        </Draggable>
      </div>
    );
};

export default Text;