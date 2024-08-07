const SaveData = (key, data) => {
  localStorage.setItem(key, data);
};
const GetData = (key) => {
  return localStorage.getItem(key);
};
