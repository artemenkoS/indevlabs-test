export const loadFromStorage = <T>(key: string): T | null => {
  try {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : null;
  } catch (error) {
    console.error(`Failed to parse data from localStorage for key "${key}":`, error);
    return null;
  }
};

export const saveToStorage = <T>(key: string, data: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`Failed to save data to localStorage for key "${key}":`, error);
  }
};
