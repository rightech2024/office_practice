"use client";
import React, { useState } from "react";
import Select from "react-select";

const CustomReactSelect = () => {
  const [value, setValue] = useState<string | null>(null);
  const options = [
    {
      value: "ashargi",
      label: "آذربایجان شرقی",
    },
    {
      value: "agharbi",
      label: "آذربایجان غربی",
    },
    {
      value: "ilam",
      label: "ایلام",
    },
  ];
  const onChangeHandler = (selectedValue: string | null) => {
    setValue(selectedValue)
  }
  return (
    <div style={{ margin: 20, width: 200 }}>
      <Select
        options={options}
        placeholder="استان*"
        defaultValue={value}
        onChange={onChangeHandler}
        isMulti
        isSearchable
        noOptionsMessage={() => "موردی یافت نشد!"}
        styles={{
            placeholder: (baseStyles, state) => ({
                ...baseStyles,
                color: "#1010f3",
            }),
            clearIndicator: () => ({
                color: "#19acef"
            }),
            dropdownIndicator: () => ({
                color: "#70f099",
            }),
        }}
      />
    </div>
  );
};

export default CustomReactSelect;
