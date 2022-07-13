import React, { useLayoutEffect } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import styled from "styled-components";

import useSidebarStore from "../../../store/useSidebarStore";
import { generateMethodColor } from "../../../utils/generateMethodColor";
import EmptyHistoryMessage from "../Empty/EmptyHistoryMessage";

const SidebarHistory = () => {
  const { userHistory, handleUserHistory } = useSidebarStore();

  useLayoutEffect(() => {
    window.addEventListener("message", (message) => {
      const { messageType, history } = message.data;

      if (messageType === "History") {
        handleUserHistory(history?.userRequestHistory);
      }
    });
  }, []);

  return (
    <>
      {userHistory ? (
        userHistory?.map(({ url, method }, index) => {
          const methodColor = generateMethodColor(method.toLowerCase());

          return (
            <HistoryListWrapper key={index}>
              <InformationWrapper>
                <MethodWrapper textColor={methodColor}>
                  <h4>{method}</h4>
                </MethodWrapper>
                <div>
                  <p>{url}</p>
                </div>
              </InformationWrapper>
              <MoreInformationWrapper>
                <div>
                  <p className="lastUpdatedIndicator">1 hour ago</p>
                </div>
                <div>
                  <AiOutlineHeart className="sidebarIcon" />
                  <FaTrashAlt className="sidebarIcon" />
                </div>
              </MoreInformationWrapper>
            </HistoryListWrapper>
          );
        })
      ) : (
        <EmptyHistoryMessage />
      )}
    </>
  );
};

const HistoryListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.8rem;
  padding: 0.7rem 0 0 0;
  border-bottom: 0.07rem solid #404040;
  overflow: hidden;
`;

const InformationWrapper = styled.div`
  display: flex;
  align-items: center;
  transition: opacity 0.15s ease-in-out;

  p {
    width: 100%;
    font-weight: 200;
    word-break: break-all;
    white-space: normal;
    line-height: 1.25;
    opacity: 0.85;

    cursor: pointer;

    :hover {
      opacity: 0.5;
    }
  }
`;

const MethodWrapper = styled.div`
  margin-right: 1rem;
  user-select: none;

  h4 {
    font-weight: 500;
    color: ${(props) => props.textColor};
  }
`;

const MoreInformationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.2rem;
  transition: opacity 0.15s ease-in-out;

  p {
    font-size: 0.8rem;
    font-weight: 300;
    opacity: 0.5;
    user-select: none;
  }

  .sidebarIcon {
    margin: 0.3rem;
    font-size: 1.1rem;
    opacity: 0.8;
    cursor: pointer;

    :hover {
      opacity: 0.45;
    }
  }
`;

export default SidebarHistory;
