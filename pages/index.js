import { useRef, useState } from "react";

export default function Home() {
  const editorRef = useRef(null);
  const [postedContent, setPostedContent] = useState("");

  const handleBold = () => {
    document.execCommand("bold", false, null);
  };

  const handleNormal = () => {
    document.execCommand("removeFormat", false, null);
  };

  const handlePosB = () => {
    if (editorRef.current) {
      editorRef.current.focus();
      document.execCommand("insertText", false, " pos b");
    }
  };

  const handleHeading = (tag) => {
    if (editorRef.current) {
      editorRef.current.focus();
      document.execCommand("formatBlock", false, tag);
    }
  };

  const handlePost = () => {
    if (editorRef.current) {
      setPostedContent(editorRef.current.innerHTML); // Save the HTML content
      editorRef.current.innerHTML = ""; // Clear the editor after posting (optional)
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Simple Text Editor</h1>

      <div style={{ marginBottom: "1rem" }}>
        <button onClick={handleBold} style={{ marginRight: "8px" }}>
          Bold
        </button>
        <button onClick={handleNormal} style={{ marginRight: "8px" }}>
          Normal
        </button>
        <button onClick={handlePosB} style={{ marginRight: "8px" }}>
          Pos B
        </button>
        <button
          onClick={() => handleHeading("h1")}
          style={{ marginRight: "8px" }}
        >
          H1
        </button>
        <button
          onClick={() => handleHeading("h2")}
          style={{ marginRight: "8px" }}
        >
          H2
        </button>
        <button
          onClick={() => handleHeading("h3")}
          style={{ marginRight: "8px" }}
        >
          H3
        </button>
      </div>

      <div
        ref={editorRef}
        contentEditable
        style={{
          border: "1px solid #ccc",
          minHeight: "200px",
          padding: "1rem",
          borderRadius: "8px",
          marginBottom: "1rem",
        }}
      >
        Start editing...
      </div>

      <button
        onClick={handlePost}
        style={{ marginBottom: "2rem", padding: "8px 16px" }}
      >
        Post
      </button>

      {postedContent && (
        <div
          style={{
            border: "1px solid #4caf50",
            padding: "1rem",
            borderRadius: "8px",
          }}
        >
          <h2>Posted Content:</h2>
          <div dangerouslySetInnerHTML={{ __html: postedContent }} />
        </div>
      )}
    </div>
  );
}
