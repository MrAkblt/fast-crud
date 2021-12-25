import { useState } from 'react';

export function useCrud(props) {
  const [loading, setLoading] = useState(false);

  const create = async (data) => {
    setLoading(true);
    const res = await fetch(props.baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    setLoading(false);
    return res.json();
  };

  const read = async (id) => {
    setLoading(true);
    const res = await fetch(`${props.baseUrl}${id ? `/${id}` : ''}`, {
      method: 'GET',
    })
    setLoading(false);
    return res.json();
  };

  const update = async (id, data) => {
    setLoading(true);
    const res = await fetch(`${props.baseUrl}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
    setLoading(false);
    return res.json();
  };

  const remove = async (id) => {
    setLoading(true);
    const res = await fetch(`${props.baseUrl}$/${id}`, {
      method: 'DELETE',
    })
    setLoading(false);
    return res.json();
  };

  return {
    create, read, update, remove, loading,
  };
}
