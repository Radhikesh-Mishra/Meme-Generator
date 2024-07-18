import React, {useState, createRef} from "react";
import { useSearchParams } from "react-router-dom";
import Text from "../components/Text";
import { exportComponentAsJPEG } from "react-component-export-image";

const Editpage = () => {
    const [params] = useSearchParams();

    const [count, setCount] = useState(0);

    const addText = () => { setCount( count + 1)};

    const memeRef = createRef();

    return (
        <div className="meme-container">
        <div ref={memeRef} className="meme">
          <img src={params.get('url')} alt="meme" className="meme-image" />
          {
            Array(count).fill(0).map((ele, index) => <Text key={index} />)
          }
        </div>
        <button onClick={addText} className="btn btn-blue">Add Text</button>
        <button onClick={() => exportComponentAsJPEG(memeRef)} className="btn btn-green">Save</button>
      </div>
    );
};

export default Editpage;