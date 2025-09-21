export const createLocalstoragData = (username) => {
  let data = JSON.parse(localStorage.getItem(username));

  if (!data) {
    localStorage.setItem(
      username,
      JSON.stringify({ username: username, cart: [] })
    );
    data = { username: username, cart: [] };
  }
};
export default createLocalstoragData;
