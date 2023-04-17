import React, { useEffect, useState } from "react";
import { FaGripLines } from "react-icons/fa";
import styled from "styled-components";

import { HEIGHT } from "../../constants";
import useStore from "../../store/useStore";

const ResizeBar = () => {
  const { requestMenuHeight, handleRequestHeightChange } = useStore(
    (state) => ({
      requestMenuHeight: state.requestMenuHeight,
      handleRequestHeightChange: state.handleRequestHeightChange,
    }),
  );

  const [isDragging, setIsDragging] = useState(false);
  const [resizeBarY, setResizeBarY] = useState(0);

  const handleMouseDown = (event: React.MouseEvent) => {
    event.preventDefault();

    setResizeBarY(event.clientY);
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (event: MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();

    if (isDragging && resizeBarY) {
      const currentHeight = Number(requestMenuHeight.replace("vh", ""));
      const newHeight = currentHeight + (event.clientY - resizeBarY) / 10;

      if (
        newHeight >= HEIGHT.MINIMUM_HEIGHT &&
        newHeight <= HEIGHT.MAXIMUM_HEIGHT
      ) {
        setResizeBarY(newHeight);
        handleRequestHeightChange(newHeight);
      } else {
        setIsDragging(false);
      }
    }
  };

  useEffect(() => {
    if (!isDragging) return;

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <ResizeBarHitBox onMouseDown={handleMouseDown}>
      <div>
        <FaGripLines className="expandIcon" />
      </div>
    </ResizeBarHitBox>
  );
};

const ResizeBarHitBox = styled.div`
  display: flex;
  align-self: stretch;
  align-items: center;
  margin: 0.5rem 4.5rem 0 4.5rem;
  padding: 0.7rem 0;
  cursor: ns-resize;

  :hover {
    opacity: 0.8;
  }

  div {
    width: 100%;
    height: 0.25vh;
    text-align: center;
    background: rgba(255, 255, 255, 0.3);
  }

  .expandIcon {
    font-size: 1.6rem;
    opacity: 0.6;
  }
`;

export default ResizeBar;
