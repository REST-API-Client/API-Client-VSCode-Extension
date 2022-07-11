import create from "zustand";

import {
  ACCEPT,
  ACCEPT_ENCODING,
  ANY_MIME_TYPE,
  CACHE_CONTROL,
  CONNECTION,
  DEFLATE,
  FORM_DATA,
  FORM_URLENCODED,
  GZIP,
  KEEP_ALIVE,
  NO_CACHE,
  PARAMS,
} from "../constants/request";
import { HEADERS } from "../constants/shared";

const initialState = [
  {
    optionType: PARAMS,
    isChecked: false,
    key: "",
    value: "",
    description: "",
  },
  {
    optionType: HEADERS,
    isChecked: true,
    key: CACHE_CONTROL,
    value: NO_CACHE,
    description: "",
  },
  {
    optionType: HEADERS,
    isChecked: true,
    key: ACCEPT,
    value: ANY_MIME_TYPE,
    description: "",
  },
  {
    optionType: HEADERS,
    isChecked: true,
    key: ACCEPT_ENCODING,
    value: `${GZIP},${DEFLATE}`,
    description: "",
  },
  {
    optionType: HEADERS,
    isChecked: true,
    key: CONNECTION,
    value: KEEP_ALIVE,
    description: "",
  },
  {
    optionType: HEADERS,
    isChecked: false,
    key: "",
    value: "",
    description: "",
  },
  {
    optionType: FORM_DATA,
    isChecked: false,
    key: "",
    value: "",
    description: "",
  },
  {
    optionType: FORM_URLENCODED,
    isChecked: false,
    key: "",
    value: "",
    description: "",
  },
];

const useKeyValueTableStore = create((set) => ({
  keyValueTableData: [...initialState],

  handleRequestCheckbox: (dataIndex) =>
    set((state) => ({
      keyValueTableData: state.keyValueTableData.map((tableData, index) =>
        dataIndex === index
          ? { ...tableData, isChecked: !tableData.isChecked }
          : tableData,
      ),
    })),

  handleRequestKey: (dataIndex, detail) =>
    set((state) => ({
      keyValueTableData: state.keyValueTableData.map((tableData, index) =>
        dataIndex === index ? { ...tableData, key: detail } : tableData,
      ),
    })),

  handleRequestValue: (dataIndex, detail) =>
    set((state) => ({
      keyValueTableData: state.keyValueTableData.map((tableData, index) =>
        dataIndex === index ? { ...tableData, value: detail } : tableData,
      ),
    })),

  handleRequestDescription: (dataIndex, detail) =>
    set((state) => ({
      keyValueTableData: state.keyValueTableData.map((tableData, index) =>
        dataIndex === index ? { ...tableData, description: detail } : tableData,
      ),
    })),

  addNewTableRow: (type) =>
    set((state) => ({
      keyValueTableData: [
        ...state.keyValueTableData,
        {
          optionType: type,
          isChecked: false,
          key: "",
          value: "",
          description: "",
        },
      ],
    })),

  deleteTableRow: (dataIndex) => {
    set((state) => ({
      keyValueTableData: state.keyValueTableData.filter(
        (_, index) => index !== dataIndex,
      ),
    }));
  },
}));

export default useKeyValueTableStore;
