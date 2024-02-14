import React, { useState } from "react";

const WithCounter = (OldCompnent,incrementCountBy=1) => {
  return function EnhancedComponent(props) {
    const [count, setCount] = useState(0);
    return (
      <OldCompnent
        {...props}
        count={count}
        incrementCount={() => setCount(count + incrementCountBy)}
      />
    );
  };
};
export default WithCounter;
