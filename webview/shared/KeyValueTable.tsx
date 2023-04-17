import React, { memo } from "react";
import { CgAddR } from "react-icons/cg";
import { FaTrashAlt } from "react-icons/fa";
import styled from "styled-components";
import { IResponseDataHeader } from "../store/slices/type";

interface IKeyValueTableProps {
  type?: string;
  title?: string;
  readOnly: boolean;
  addNewTableRow?: (type: string) => void;
  deleteTableRow?: (index: number) => void;
  handleRequestKey?: (index: number, value: string) => void;
  keyValueTableData:
    | {
        optionType: string;
        isChecked: boolean;
        key: string;
        value: string;
        description: string;
      }[]
    | IResponseDataHeader[];
  handleRequestValue?: (index: number, value: string) => void;
  handleRequestCheckbox?: (index: number) => void;
  handleRequestDescription?: (index: number, value: string) => void;
}

const KeyValueTable = ({
  type,
  title,
  readOnly,
  addNewTableRow,
  deleteTableRow,
  handleRequestKey,
  keyValueTableData,
  handleRequestValue,
  handleRequestCheckbox,
  handleRequestDescription,
}: IKeyValueTableProps) => {
  return (
    <TableContainerWrapper>
      <TableContainer readOnlyMode={readOnly}>
        {title && <h2>{title}</h2>}
        <Table readOnlyMode={readOnly}>
          <thead>
            <tr>
              {!readOnly && <th></th>}
              <th>Key</th>
              <th>Value</th>
              {!readOnly && <th> Description</th>}
              {!readOnly && (
                <th className="tableIconContainer">
                  <CgAddR
                    className="tableIcon addButton"
                    onClick={() =>
                      type && addNewTableRow && addNewTableRow(type)
                    }
                  />
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {keyValueTableData.map(
              (
                { optionType, isChecked, key, value, description }: any,
                index: number,
              ) => (
                <React.Fragment key={index}>
                  {optionType === type && (
                    <tr>
                      {!readOnly && (
                        <th className="tableIconContainer">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() =>
                              handleRequestCheckbox &&
                              handleRequestCheckbox(index)
                            }
                          />
                        </th>
                      )}
                      <td>
                        <input
                          type="text"
                          name="Key"
                          placeholder="Key"
                          value={key}
                          onChange={(event) =>
                            handleRequestKey &&
                            handleRequestKey(index, event.target.value)
                          }
                          readOnly={readOnly}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Value"
                          placeholder="Value"
                          value={value}
                          onChange={(event) =>
                            handleRequestValue &&
                            handleRequestValue(index, event.target.value)
                          }
                          readOnly={readOnly}
                        />
                      </td>
                      {!readOnly && (
                        <>
                          <td>
                            <input
                              type="text"
                              name="Description"
                              placeholder="Description"
                              value={description}
                              onChange={(event) =>
                                handleRequestDescription &&
                                handleRequestDescription(
                                  index,
                                  event.target.value,
                                )
                              }
                            />
                          </td>
                          <th className="tableIconContainer">
                            <FaTrashAlt
                              className="tableIcon"
                              onClick={() =>
                                deleteTableRow && deleteTableRow(index)
                              }
                            />
                          </th>
                        </>
                      )}
                    </tr>
                  )}
                </React.Fragment>
              ),
            )}
          </tbody>
        </Table>
      </TableContainer>
    </TableContainerWrapper>
  );
};

const TableContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const TableContainer = styled.div<{ readOnlyMode: boolean }>`
  height: ${(props) => (props.readOnlyMode ? "50vh" : "35vh")};
  width: ${(props) => (props.readOnlyMode ? "75%" : "100%")};
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  overflow-y: ${(props) => (props.readOnlyMode ? "none" : "scroll")};

  h2 {
    margin: 1.3rem 0;
    opacity: 0.9;
  }
`;

const Table = styled.table<{ readOnlyMode: boolean }>`
  width: 100%;
  border-collapse: collapse;

  thead {
    font-size: 1.1rem;
    user-select: none;
  }

  th,
  td {
    font-weight: 500;
    text-align: left;
    padding: 0.7rem 1.2rem;
    border: 0.1rem solid rgb(55, 55, 55);
  }

  input {
    background-color: transparent;
    color: var(--default-text);
    font-style: ${(props) => props.readOnlyMode && "italic"};
    font-weight: ${(props) => props.readOnlyMode && "300"};
    opacity: ${(props) => props.readOnlyMode && "0.75"};
  }

  .tableIconContainer {
    text-align: center;
    padding: 0.7rem 0.25rem;
  }

  .tableIcon {
    text-align: center;
    cursor: pointer;

    :hover {
      opacity: 0.7;
    }
  }

  .addButton {
    font-size: 1.25rem;
  }
`;

export default memo(KeyValueTable);
