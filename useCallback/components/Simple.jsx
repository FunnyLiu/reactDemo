import React, { useCallback, useState, useEffect } from "react";


function Simple() {
  const [val, setVal] = useState("");
  //这种简单套个壳的意义没有，适得其反
  const onChange = useCallback((evt) => {
    setVal(evt.target.value);
  }, []);
  //普通场景下下面的方式性能更好
//   const onChange = (evt) => {
//     setVal(evt.target.value);
//   };

  return <input val={val} onChange={onChange} />;
}

export default Simple;
