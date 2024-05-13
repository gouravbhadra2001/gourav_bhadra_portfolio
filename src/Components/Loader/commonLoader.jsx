import React, { useEffect, useState } from 'react';

const CommonLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay of 2 seconds
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  });

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : null}
    </div>
  );
};

export default CommonLoader;
