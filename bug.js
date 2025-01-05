useEffect(() => {
  // Incorrect way to update state
  setCount(count + 1);
}, [count]);