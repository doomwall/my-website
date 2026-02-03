import React, { useEffect, useState } from 'react';

export default function HelloClient() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setMsg(data.message))
      .catch(err => setMsg('Error: ' + err.message));
  }, []);

  return <div>{msg || 'Loading...'}</div>;
}