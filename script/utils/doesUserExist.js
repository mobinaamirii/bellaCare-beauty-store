import users from "../constant/users.js";

export const doesUserExist = (username = "") => {
  let doesUserExist = false;
  users.forEach((user) => {
    if (user.username === username) {
      doesUserExist = true;
      return;
    }
  });
  return doesUserExist;
};
export default doesUserExist;
