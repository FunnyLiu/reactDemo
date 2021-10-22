import React, { useCallback, useState, useEffect, useMemo } from "react";

function UseMemo() {
  return <WithMemo />;
}

const WithMemo = function() {
  const [count, setCount] = useState(1);
  const [val, setValue] = useState("");
  const expensive = () => {
    console.log("执行了expensive");
    let sum = 0;
    for (let i = 0; i < count * 100; i++) {
      sum += i;
    }
    return sum;
  };
  const expensive2 = React.useMemo(() => {
    // 加入此处是一段大量运算的逻辑，实现了只有依赖项count变化时才会重新触发。达 到了性能优化的目的
    console.log("执行了expensive2");
    let sum = 0;
    for (let i = 0; i < count * 100; i++) {
      sum += i;
    }
    return sum;
  }, [count]);
  return (
    <div>
      {" "}
      <h4>
        {count}-{val}-{expensive()}
      </h4>
      <h4>
        {count}-{val}-{expensive2}
      </h4>{" "}
      <div>
        <button onClick={() => setCount(count + 1)}>+c1</button>
        <input
          value={val}
          onChange={(event) => setValue(event.target.value)}
        />{" "}
      </div>
      一般用来优化性能
    </div>
  );
};

export default UseMemo;
