export const createLocalStorageLogin = (username) => {
  localStorage.setItem("logged-in", JSON.stringify({ username: username }));
};
export default createLocalStorageLogin;
