const AppForm = () => {
  const activityFormData = {
    category: [],
  };

  const selectCategory = (category) => {
    if (activityFormData.category.some((item) => item === category)) {
      return;
    } else {
      console.log(category);
    }
  };

  const CallSubmitForm = (e) => {
    e.preventDefault();
    console.log(activityFormData);
  };
  return <div>AppForm</div>;
};

export default AppForm;
