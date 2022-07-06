import PropTypes from "prop-types";
import React from "react";
import { CgAddR } from "react-icons/cg";
import { FaTrashAlt } from "react-icons/fa";
import styled from "styled-components";

function KeyValueTable({
  title,
  type,
  tableData,
  handleCheckboxInput,
  handleKeyInput,
  handleValueInput,
  handleDescriptionInput,
  handleDeleteButton,
  handleAddButton,
}) {
  return (
    <>
      <TableContainer>
        {title && <h2>{title}</h2>}
        <Table>
          <thead>
            <tr>
              <th></th>
              <th>Key</th>
              <th>Value</th>
              <th>Description</th>
              <th className="tableIconContainer">
                <CgAddR
                  className="tableIcon addButton"
                  onClick={() => handleAddButton(type)}
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map(
              ({ optionType, isChecked, key, value, description }, index) => (
                <React.Fragment key={index}>
                  {optionType === type && (
                    <tr>
                      <th className="tableIconContainer">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleCheckboxInput(index)}
                        />
                      </th>
                      <td>
                        <input
                          type="text"
                          name="Key"
                          placeholder="Key"
                          value={key}
                          onChange={(event) =>
                            handleKeyInput(index, event.target.value)
                          }
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Value"
                          placeholder="Value"
                          value={value}
                          onChange={(event) =>
                            handleValueInput(index, event.target.value)
                          }
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Description"
                          placeholder="Description"
                          value={description}
                          onChange={(event) =>
                            handleDescriptionInput(index, event.target.value)
                          }
                        />
                      </td>
                      <th className="tableIconContainer">
                        <FaTrashAlt
                          className="tableIcon"
                          onClick={() => handleDeleteButton(index)}
                        />
                      </th>
                    </tr>
                  )}
                </React.Fragment>
              ),
            )}
          </tbody>
        </Table>
      </TableContainer>
    </>
  );
}

const TableContainer = styled.div`
  height: 35vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  overflow-y: scroll;

  h2 {
    margin: 1.3rem 0;
    opacity: 0.9;
  }
`;

const Table = styled.table`
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

KeyValueTable.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  tableData: PropTypes.array,
  handleCheckboxInput: PropTypes.func,
  handleKeyInput: PropTypes.func,
  handleValueInput: PropTypes.func,
  handleDescriptionInput: PropTypes.func,
  handleDeleteButton: PropTypes.func,
  handleAddButton: PropTypes.func,
};

export default KeyValueTable;
