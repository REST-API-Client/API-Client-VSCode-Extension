import { COMMON, REQUEST } from "../../constants";

const initialState = [
  {
    optionType: REQUEST.PARAMS,
    isChecked: false,
    key: "",
    value: "",
    description: "",
  },
  {
    optionType: COMMON.HEADERS,
    isChecked: true,
    key: REQUEST.CACHE_CONTROL,
    value: REQUEST.NO_CACHE,
    description: "",
  },
  {
    optionType: COMMON.HEADERS,
    isChecked: true,
    key: REQUEST.ACCEPT,
    value: REQUEST.ANY_MIME_TYPE,
    description: "",
  },
  {
    optionType: COMMON.HEADERS,
    isChecked: true,
    key: REQUEST.ACCEPT_ENCODING,
    value: `${REQUEST.GZIP},${REQUEST.DEFLATE}`,
    description: "",
  },
  {
    optionType: COMMON.HEADERS,
    isChecked: true,
    key: REQUEST.CONNECTION,
    value: REQUEST.KEEP_ALIVE,
    description: "",
  },

  {
    optionType: COMMON.HEADERS,
    isChecked: false,
    key: "",
    value: "",
    description: "",
  },
  {
    optionType: REQUEST.FORM_DATA,
    isChecked: false,
    key: "",
    value: "",
    description: "",
  },
  {
    optionType: REQUEST.FORM_URLENCODED,
    isChecked: false,
    key: "",
    value: "",
    description: "",
  },
];

const keyValueTableDataSlice = (set) => ({
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

  addRequestBodyHeaders: (headerValue) =>
    set((state) => ({
      keyValueTableData: [
        {
          optionType: COMMON.HEADERS,
          isChecked: true,
          key: REQUEST.CONTENT_TYPE,
          value: headerValue,
          description: "",
        },
        ...state.keyValueTableData,
      ],
    })),

  removeRequestBodyHeaders: () => {
    set((state) => ({
      keyValueTableData: state.keyValueTableData.filter(
        (keyValueData) => keyValueData.key !== REQUEST.CONTENT_TYPE,
      ),
    }));
  },

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
});

export default keyValueTableDataSlice;
