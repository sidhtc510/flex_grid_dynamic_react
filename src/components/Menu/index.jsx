import React from "react";

export default function Menu({ updateStyles }) {
  const funct = (e) => {
    e.preventDefault();

    const style = {
      flexDirection: e.target.flexDirection.value,
      justifyContent: e.target.justifyContent.value,
      alignItems: e.target.alignItems.value,
      flexWrap: e.target.flexWrap.value,
    };

    updateStyles(style);
  };

  const handleSelectChange = (e) => {
    // Срабатывает при изменении значения в select
    // Программно отправляет форму при выборе нового значения
    const form = e.target.form;
    // const formData = new FormData(form);
    const formSubmitEvent = new Event("submit", { bubbles: true });
    Object.defineProperty(formSubmitEvent, "target", {
      value: form,
      enumerable: true,
    });
    form.dispatchEvent(formSubmitEvent);
  };

  return (
    <form className="menu" onSubmit={funct}>
  
      <div className="flexDirectionWrapper">
        <label htmlFor="flexDirection">flex-direction</label>
        <select
          name="flexDirection"
          id="flexDirection"
          onChange={handleSelectChange}
        >
          <option value="row">row</option>
          <option value="column">column</option>
          <option value="row-reverse">row-reverse</option>
          <option value="column-reverse">column-reverse</option>
        </select>
      </div>

      <div className="justifyContentWrapper">
        <label htmlFor="justifyContent">justify-content</label>
        <select
          name="justifyContent"
          id="justifyContent"
          onChange={handleSelectChange}
        >
          <option value="flex-start">flex-start</option>
          <option value="center">center</option>
          <option value="flex-end">flex-end</option>
          <option value="space-between">space-between</option>
          <option value="space-around">space-around</option>
          <option value="space-evenly">space-evenly</option>
        </select>
      </div>

      <div className="alignItemsWrapper">
        <label htmlFor="alignItems">align-items</label>
        <select name="alignItems" id="alignItems" onChange={handleSelectChange}>
          <option value="flex-start">flex-start</option>
          <option value="center">center</option>
          <option value="flex-end">flex-end</option>
          <option value="baseline">baseline</option>
          <option value="stretch">stretch</option>
        </select>
      </div>

      <div className="flexWrapWrapper">
        <label htmlFor="flexWrap">flex-wrap</label>
        <select name="flexWrap" id="flexWrap" onChange={handleSelectChange}>
          <option value="wrap">wrap</option>
          <option value="nowrap">nowrap</option>
          <option value="wrap-reverse">wrap-reverse</option>
        </select>
      </div>
      {/* <button type="submit">apply</button> */}
    </form>
  );
}
