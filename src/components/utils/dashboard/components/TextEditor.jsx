import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const TextEditor = () => {
  const [value, setValue] = useState("");

  const containerStyle = {
    backgroundColor: "white",
    height: "12rem", // Fixed height for the container
    marginBottom: "30px", // Margin bottom
    border: "1px solid #ccc", // Optional border for visibility
    overflow: "hidden", // Hide overflow
    position: "relative", // Required for sticky positioning
  };

  const editorWrapperStyle = {
    position: "sticky",
    top: 0,
    height: "100%", // Ensure the editor wrapper takes full height
    overflowY: "auto", // Handle vertical overflow
    boxSizing: "border-box", // Ensure padding and border are included in the element's total width and height
  };

  return (
    <div style={containerStyle}>
      <div style={editorWrapperStyle}>
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          className=" shadow-md"
          style={{ height: "100%", overflowY: "auto" }}
        />
      </div>
    </div>
  );
};

export default TextEditor;
