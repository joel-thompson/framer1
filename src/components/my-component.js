import React from 'react';
import { Frame, Scroll, useCycle } from "framer"

function MyComponent() {
  const [scale, cycle] = useCycle(1, 0.1)
  return (
    <div>
      <Frame animate={{ scale: 0.5 }} />

      <br/>

      <Frame
        animate={{ scale: scale }}
        onTap={() => cycle()}
      />
    </div>
  );
}

export default MyComponent;
