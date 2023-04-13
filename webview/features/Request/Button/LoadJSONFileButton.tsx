import React from "react";
import shallow from "zustand/shallow";

import Button from "../../../components/Button";
import useStore from "../../../store/useStore";

interface ILoadJSONFileButtonProps {
  optionsType: string;
  replaceValues: boolean;
}

const LoadJSONFileButton = ({
  optionsType,
  replaceValues = false,
}: ILoadJSONFileButtonProps) => {
  const { handleFileUpload } = useStore(
    (state: any) => ({ handleFileUpload: state.handleFileUpload }),
    shallow,
  );

  async function loadSettingsFromJSONFile(e) {
    const config = await readFileJSON(e.target.files.item(0));
    handleFileUpload(config, optionsType, replaceValues);
  }

  async function readFileJSON(file: any) {
    return JSON.parse(await file.text());
  }

  const fileInput = document.createElement("input");
  const inputAttrs = {
    hidden: true,
    type: "file",
    accept: ".json",
  };
  for (let attr in inputAttrs) {
    fileInput.setAttribute(attr, inputAttrs[attr]);
  }
  fileInput.addEventListener("change", (e) => loadSettingsFromJSONFile(e));

  return (
    <Button
      buttonType="submit"
      primary={false}
      handleButtonClick={() => fileInput.click()}
    >
      {replaceValues ? "Set data from file" : "Add data from file"}
    </Button>
  );
};

export default LoadJSONFileButton;
