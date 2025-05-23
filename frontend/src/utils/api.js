// src/utils/api.js
const API_BASE_URL = import.meta.env.VITE_API_URL;

export const getBackendStatus = async () => {
  const res = await fetch(`${API_BASE_URL}/`);
  const data = await res.json();
  return data;
};

export const getCities = async () => {
    const res = await fetch(`${API_BASE_URL}/get_locations`);
    const data = await res.json();
    return data.locations;
};
  
export const getBlogs = async () => {
    const res = await fetch(`${API_BASE_URL}/api/blogs`);
    const data = await res.json();
    return data.blogs || [];
  };