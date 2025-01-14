// Public imports
import axios from 'axios';

//* Get requests
export const get = async (url: string, token: string) => {
  // Req config
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  // Get data
  try {
    const res = await axios.get(url, config);
    return res.data;
  } catch {
    return null;
  }
};

//* Post requests
export const post = async (url: string, payload: unknown, token: string) => {
  // Req config
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      apiKey: process.env.NEXT_PUBLIC_PID_API_KEY,
    },
  };

  // Post data
  try {
    const res = await axios.post(url, payload, config);
    if (res.data) {
      return res.data;
    } else {
      return null;
    }
  } catch {
    return null;
  }
};

//* Put requests
export const put = async (url: string, payload: unknown, token: string) => {
  // Req config
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  // Put data
  try {
    const res = await axios.put(url, payload, config);
    if (res.data.isSucceeded) {
      return res.data;
    } else {
      return null;
    }
  } catch (err) {
    return err;
  }
};

//* Delete requests
export const del = async (url: string, token: string) => {
  // Req config
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  // Delete data
  try {
    const res = await axios.delete(url, config);
    if (res) {
      return res;
    } else {
      return null;
    }
  } catch {
    return null;
  }
};
