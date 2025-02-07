```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect way to unsubscribe from the interval
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId); // This will only clear the interval if the component unmounts, causing memory leaks if the component re-renders.
    };
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}
```