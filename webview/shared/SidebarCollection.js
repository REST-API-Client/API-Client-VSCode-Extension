import PropTypes from "prop-types";
import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import styled from "styled-components";

import Information from "../components/Information";
import MoreInformation from "../components/MoreInformation";
import EmptyCollectionMessage from "../features/Sidebar/Empty/EmptyCollectionMessage";
import { generateMethodColor } from "../utils";

const SidebarCollection = ({
  sidebarOption,
  userCollection,
  handleSidebarIconClick,
}) => {
  return (
    <CollectionWrapper>
      {userCollection?.length ? (
        <div className="deleteAllButtonContainer">
          <h5>Delete all</h5>
        </div>
      ) : null}
      {userCollection?.length ? (
        userCollection.map(({ url, method, isUserFavorite, id }) => {
          const methodColor = generateMethodColor(method.toLowerCase());

          return (
            <HistoryListWrapper key={sidebarOption + id}>
              <Information textColor={methodColor}>
                <div className="methodContainer">
                  <h4>{method}</h4>
                </div>
                <div>
                  <p>{url}</p>
                </div>
              </Information>
              <MoreInformation>
                <div>
                  <p>1 hour ago</p>
                </div>
                <div>
                  {sidebarOption === "History" ? (
                    isUserFavorite ? (
                      <AiFillHeart
                        className="sidebarIcon favorite"
                        onClick={() =>
                          handleSidebarIconClick("Remove Favorite", id)
                        }
                      />
                    ) : (
                      <AiOutlineHeart
                        className="sidebarIcon"
                        onClick={() => handleSidebarIconClick("Favorite", id)}
                      />
                    )
                  ) : null}
                  <FaTrashAlt
                    className="sidebarIcon"
                    onClick={() =>
                      sidebarOption === "History"
                        ? handleSidebarIconClick(
                            "Delete",
                            id,
                            "userRequestHistory",
                          )
                        : handleSidebarIconClick("Delete", id, "userFavorites")
                    }
                  />
                </div>
              </MoreInformation>
            </HistoryListWrapper>
          );
        })
      ) : (
        <EmptyCollectionMessage currentSidebarOption={sidebarOption} />
      )}
    </CollectionWrapper>
  );
};

const CollectionWrapper = styled.div`
  overflow-y: scroll;
  height: 70vh;

  .deleteAllButtonContainer {
    display: flex;
    justify-content: flex-end;
    margin: 1rem 0 0.25rem 0;
  }

  h5 {
    text-align: end;
    padding: 0.25rem 0.4rem;
    color: #cbcbcb;
    border-radius: 10px;
    background: #464646;
    transition: opacity 0.15s ease-in-out;
    cursor: pointer;

    :hover {
      opacity: 0.45;
    }
  }
`;

const HistoryListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.35rem;
  padding: 0.55rem 0 0 0.25rem;
  border-bottom: 0.07rem solid #404040;
  overflow: hidden;
`;

SidebarCollection.propTypes = {
  sidebarOption: PropTypes.string,
  userCollection: PropTypes.array,
  handleSidebarIconClick: PropTypes.func,
};

export default SidebarCollection;
