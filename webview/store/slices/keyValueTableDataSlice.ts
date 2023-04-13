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

const keyValueTableDataSlice = (set: any) => ({
  keyValueTableData: [...initialState],

  handleRequestCheckbox: (dataIndex: any) =>
    set((state: any) => ({
      keyValueTableData: state.keyValueTableData.map(
        (tableData: any, index: number) =>
          dataIndex === index
            ? { ...tableData, isChecked: !tableData.isChecked }
            : tableData,
      ),
    })),

  handleFileUpload: (
    data: any,
    optionsType = COMMON.HEADERS,
    replaceValues: any,
  ) => {
    const rows: any = [];
    for (let key in data) {
      rows.push({
        optionType: optionsType,
        isChecked: true,
        key,
        value: data[key],
        description: "",
      });
    }
    set((state: any) => ({
      keyValueTableData: [
        ...state.keyValueTableData.filter(
          (v: any) =>
            data[v.key] === undefined &&
            (!replaceValues || v.optionType !== optionsType),
        ),
        ...rows,
      ],
    }));
  },

  handleRequestKey: (dataIndex: any, detail: any) =>
    set((state: any) => ({
      keyValueTableData: state.keyValueTableData.map(
        (tableData: any, index: any) =>
          dataIndex === index ? { ...tableData, key: detail } : tableData,
      ),
    })),

  handleRequestValue: (dataIndex: any, detail: any) =>
    set((state: any) => ({
      keyValueTableData: state.keyValueTableData.map(
        (tableData: any, index: any) =>
          dataIndex === index ? { ...tableData, value: detail } : tableData,
      ),
    })),

  handleRequestDescription: (dataIndex: any, detail: any) =>
    set((state: any) => ({
      keyValueTableData: state.keyValueTableData.map(
        (tableData: any, index: number) =>
          dataIndex === index
            ? { ...tableData, description: detail }
            : tableData,
      ),
    })),

  addRequestBodyHeaders: (headerValue: any) =>
    set((state: any) => ({
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
    set((state: any) => ({
      keyValueTableData: state.keyValueTableData.filter(
        (keyValueData: any) => keyValueData.key !== REQUEST.CONTENT_TYPE,
      ),
    }));
  },

  addNewTableRow: (type: any) =>
    set((state: any) => ({
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

  deleteTableRow: (dataIndex: any) => {
    set((state: any) => ({
      keyValueTableData: state.keyValueTableData.filter(
        (_: any, index: any) => index !== dataIndex,
      ),
    }));
  },

  handleSidebarCollectionHeaders: (headers: any) => {
    set(() => {
      return {
        keyValueTableData: [...headers],
      };
    });
  },
});

export default keyValueTableDataSlice;
