import ReactDOM from "react-dom/client";
import React, { useState } from "react";
import apiConfig from "axios";

function Example() {
    const [file, setFile] = useState(null);

    const formData = new FormData();

    const onFileChange = (e) => setFile(e.target.files[0]);

    const handleSubmit = (e) => {
        e.preventDefault();
        formData.append("file", file);
        apiConfig.post("/api/upload-file", formData);
        // alert("File is Uploaded.");


    };

    return (
        <div>
            <h1>TestComponent</h1>
            <form  onSubmit={handleSubmit} >
                <input
                    type="file"
                    name="file"
                    onChange={onFileChange}
                    multiple
                />
                <button>Upload</button>
            </form>

        </div>
    );
}

export default Example;

if (document.getElementById("root")) {
    const Index = ReactDOM.createRoot(document.getElementById("root"));

    Index.render(
        <React.StrictMode>
            <Example />
        </React.StrictMode>
    );
}
