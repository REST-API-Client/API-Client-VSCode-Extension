import React, { useEffect, useState } from "react";
import { FaGripLines } from "react-icons/fa";
import styled from "styled-components";

import { MAXIMUM_HEIGHT, MINIMUM_HEIGHT } from "../../constants/height";
import useHeightStore from "../../store/useHeightStore";

function ResizeBar() {
  const { height, handleRequestHeightChange } = useHeightStore(
    (state) => state,
  );
  const [isDragging, setIsDragging] = useState(false);
  const [resizeBarY, setResizeBarY] = useState(null);

  const handleMouseDown = (event) => {
    event.preventDefault();

    setResizeBarY(event.clientY);
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (event) => {
    event.stopPropagation();
    event.preventDefault();

    if (isDragging && resizeBarY) {
      const currentHeight = Number(height.replace("vh", ""));
      const newHeight = currentHeight + (event.clientY - resizeBarY) / 10;

      if (newHeight > MINIMUM_HEIGHT && newHeight < MAXIMUM_HEIGHT) {
        setResizeBarY(newHeight);
        handleRequestHeightChange(newHeight);
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
}

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
