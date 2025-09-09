import { useState } from "react";

const CategorySelector = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const styles = {
    readEmails: { backgroundColor: "orange" },
    sendEmails: { backgroundColor: "green" },
    webParsing: { backgroundColor: "blue" },
    default: { backgroundColor: "grey" },
  };

  const validateCategory = (category) => {
    return selectedCategory === category;
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <button
        style={
          validateCategory("readEmails") ? styles.readEmails : styles.default
        }
        onClick={() => handleCategoryClick("readEmails")}
      >
        Read Emails
      </button>
      <button
        style={
          validateCategory("sendEmails") ? styles.sendEmails : styles.default
        }
        onClick={() => handleCategoryClick("sendEmails")}
      >
        Send Emails
      </button>
      <button
        style={
          validateCategory("webParsing") ? styles.webParsing : styles.default
        }
        onClick={() => handleCategoryClick("webParsing")}
      >
        Web Parsing
      </button>
    </div>
  );
};

export default CategorySelector;
