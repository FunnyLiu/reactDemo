import React, { useCallback, useState, useMemo } from "react";

function Effect() {
  //   return <Blub />;
  // return <Blub2 />;
  return <Blub3 />;
}
let num = 0;

function Foo({ bar, baz }) {
  const options = { bar, baz };
  //useEffect 将对每次渲染中对 options 进行引用相等性检查，并且由于JavaScript的工作方式，
  //每次渲染 options 都是新的，所以当React测试 options 是否在渲染之间发生变化时，
  //它将始终计算为 true，意味着每次渲染后都会调用 useEffect 回调，而不是仅在 bar 和 baz 更改时调用
  React.useEffect(() => {
    console.log(options);
  }, [options]);
  return <div>foobar</div>;
}
function Blub() {
  const [val, setVal] = useState(0);

  function onClick() {
    num = num + 1;
    //每一次Foo组件重新渲染，其子组件Child都会重新useEffect
    setVal(num);
    console.log(val);
  }
  return (
    <div>
      <Foo bar="bar value" baz={3} val={val} />
      <button onClick={onClick}>click</button>
    </div>
  );
}
//有两种方式解决上面的问题

// 第一种方式是
function Foo2({ bar, baz }) {
  React.useEffect(() => {
    const options = { bar, baz };
    console.log(options);
    //但是有一种情况下：如果 bar 或者 baz 是（非原始值）对象、数组、函数等，这不是一个实际的解决方案
  }, [bar, baz]); // we want this to re-run if bar or baz change
  return <div>foobar</div>;
}
function Blub2() {
  const [val, setVal] = useState(0);

  function onClick() {
    num = num + 1;
    setVal(num);
    console.log(val);
  }
  return (
    <div>
      <Foo2 bar="bar value" baz={3} val={val} />
      {/* 但是有一种情况下：如果 bar 或者 baz 是（非原始值）对象、数组、函数等，这不是一个实际的解决方案 */}
      {/* <Foo2 bar="bar value" baz={[3]} val={val} /> */}
      <button onClick={onClick}>click</button>
    </div>
  );
}

//第二种方式就是useMemo和useCallback了
function Foo3({ bar, baz }) {
  React.useEffect(() => {
    const options = { bar, baz };
    console.log(options);
  }, [bar, baz]); // we want this to re-run if bar or baz change
  return <div>foobar</div>;
}
function Blub3() {
  const [val, setVal] = useState(0);

  function onClick() {
    num = num + 1;
    setVal(num);
    console.log(val);
  }

//   const bar = () => {};
//   const baz = [3];
  // 通过这种方法解决引用类型的重新渲染问题
  const bar = useCallback(() => {}, [])
  const baz = useMemo(() => [3], [])
  return (
    <div>
      {/* <Foo3 bar="bar value" baz={3} val={val} /> */}
      {/* 故意使用引用类型 */}
      <Foo2 bar={bar} baz={baz} val={val} />
      <button onClick={onClick}>click</button>
    </div>
  );
}

export default Effect;
