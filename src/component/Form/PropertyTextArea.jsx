import PropTypes from "prop-types";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState, useEffect } from "react";

function PropertyTextArea({ title, name, handleChange }) {
  const [input, setInput] = useState({
    name,
    value: "",
  });

  useEffect(() => {
    handleChange(input);
  }, [input]);

  return (
    <div className="mg-top-20">
      <h4 className="homec-submit-form__heading">{title}</h4>
      <div className="form-group homec-form-input">
        <CKEditor
          editor={ClassicEditor}
          data={input.value}
          onChange={(event, editor) => {
            const data = editor.getData(); // Correctly accessing the editor instance
            setInput({ ...input, value: data });
          }}
        />
      </div>
    </div>
  );
}

PropertyTextArea.propTypes = {
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default PropertyTextArea;
