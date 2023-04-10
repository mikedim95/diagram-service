import React from "react";

function SwipeableViewsComponent(props) {
  const [index, setIndex] = React.useState(0);
  const [swipeStartX, setSwipeStartX] = React.useState(null);

  const handleSwipeStart = (e) => {
    setSwipeStartX(e.touches[0].clientX);
  };

  const handleSwipeMove = (e) => {
    if (swipeStartX !== null) {
      const deltaX = e.touches[0].clientX - swipeStartX;
      if (deltaX > 50) {
        setIndex(Math.max(index - 1, 0));
        setSwipeStartX(null);
      } else if (deltaX < -50) {
        setIndex(Math.min(index + 1, props.children.length - 1));
        setSwipeStartX(null);
      }
    }
  };

  const handleSwipeEnd = () => {
    setSwipeStartX(null);
  };

  return (
    <div
      onTouchStart={handleSwipeStart}
      onTouchMove={handleSwipeMove}
      onTouchEnd={handleSwipeEnd}
      style={{
        display: "flex",
        flexDirection: "row",
        transform: `translateX(-${index * 100}%)`,
        transition: "transform 0.3s ease",
      }}
    >
      {" "}
      {props.children.map((child, i) => (
        <div key={i} style={{ flexShrink: 0, width: "100%" }}>
          {" "}
          {child}{" "}
        </div>
      ))}{" "}
    </div>
  );
}

export default SwipeableViewsComponent;
