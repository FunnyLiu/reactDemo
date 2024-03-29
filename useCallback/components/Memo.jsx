import React, { useCallback, useState, useEffect } from "react";

function Memo() {
  // return <DualCounter />;
  return <DualCounter2 />;
}

function CountButton({ onClick, count }) {
  console.log("render");
  return <button onClick={onClick}>{count}</button>;
}
const  Test = ({count}) =>{
  console.log('test render')
  return <div>test {count}</div>
}
//这种情况下，每点击一个按钮，都会引起两个组件的重新渲染
function DualCounter() {
  const [count1, setCount1] = React.useState(0);
  const increment1 = () => setCount1((c) => c + 1);

  const [count2, setCount2] = React.useState(0);
  const increment2 = () => setCount2((c) => c + 1);

  return (
    <>
      <CountButton count={count1} onClick={increment1} />
      <CountButton count={count2} onClick={increment2} />
      <Test count={count1} />
    </>
  );
}
//React.memo和useCallback的组合下，就可以达到只渲染自己的目的
const  Test2 = React.memo(({count}) =>{
  console.log('test render')
  return <div>test {count}</div>
})
const CountButton2 = React.memo(function CountButton({ onClick, count }) {
    console.log('render')
  return <button onClick={onClick}>{count}</button>;
});

function DualCounter2() {
  const [count1, setCount1] = React.useState(0);
  // const increment1 = () => setCount1((c) => c + 1);
  const increment1 = React.useCallback(() => setCount1((c) => c + 1), []);

  const [count2, setCount2] = React.useState(0);
  // const increment2 = () => setCount2((c) => c + 1);
  const increment2 = React.useCallback(() => setCount2((c) => c + 1), []);

  const increment3 = () => setCount2((c) => c + 1);

  return (
    <>
      <CountButton2 count={count1} onClick={increment1} />
      <CountButton2 count={count2} onClick={increment2} />
      <Test2 count={count1}/>
      {/* <Test2 count={count1} increment3={increment3}/> */}
    </>
  );
}

export default Memo;
