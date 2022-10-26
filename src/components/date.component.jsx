import { useState, useEffect } from 'react';

function DateComponent() {
  const [date, setDate] = useState();

  useEffect(() => {
    setInterval(() => setDate(Date.now()), 100);
    return () => clearInterval();
  }, [date]);

  return <h3>{new Date(date).toString()}</h3>;
}

export default DateComponent;
