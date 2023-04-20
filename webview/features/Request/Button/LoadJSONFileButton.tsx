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
    (state) => ({ handleFileUpload: state.handleFileUpload }),
    shallow,
  );

  async function loadSettingsFromJSONFile(event: any) {
    const selectedFiles = event.target.files;

    if (!selectedFiles) return;

    const config = await readFileJSON(selectedFiles.item(0));

    handleFileUpload(config, optionsType, replaceValues);
  }

  async function readFileJSON(file: File | null) {
    if (!file) return;

    return JSON.parse(await file.text());
  }

  const fileInput = document.createElement("input");
  const inputAttrs = {
    type: "file",
    accept: ".json",
  };

  for (let attr in inputAttrs) {
    fileInput.setAttribute(
      attr,
      inputAttrs[attr as keyof { type: string; accept: string }],
    );
  }

  fileInput.addEventListener("change", (event) =>
    loadSettingsFromJSONFile(event),
  );

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
