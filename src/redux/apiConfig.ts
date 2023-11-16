export const getBaseUrl = () => {
  const storedBaseUrl = window.sessionStorage.getItem("baseUrl");
  return storedBaseUrl;
};
