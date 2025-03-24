type STORAGE_KEYS = "addresses";

export const getStorage = <T>(key: STORAGE_KEYS) => {
  const storagedData = localStorage.getItem(key);

  if (storagedData) return JSON.parse(storagedData) as T;

  return null;
};

export const setStorage = (key: STORAGE_KEYS, data: unknown) => {
  localStorage.setItem(key, JSON.stringify(data));
};
