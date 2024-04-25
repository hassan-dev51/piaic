import React, { useState } from "react";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css"; // Import the CSS for styling

const Tags = () => {
  const [value, setValue] = useState([]);

  const handleInputChange = (tags: any) => {
    setValue(tags);
  };

  return (
    <div>
      <TagsInput
        value={value}
        onChange={handleInputChange}
        inputProps={{
          placeholder: "Add tags",
          style: { width: "100%" },
        }}
        addOnBlur={true} // Automatically adds a tag when input loses focus
        addKeys={[13, 9]} // Adds tag on Enter key press or Tab key press
        removeKeys={[8]} // Removes tag on Backspace key press
        onlyUnique={true} // Allows only unique tags
        maxTags={5} // Limits the number of tags to 5
      />
    </div>
  );
};

export default Tags;
