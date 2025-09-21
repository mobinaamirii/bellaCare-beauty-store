import users from "../constant/users.js";

export const doesPassExist = (username = "", password = "") => {
  let doesPassExist = false;
  users.forEach((user) => {
    if (user.username === username && user.password == password) {
      doesPassExist = true;
      return;
    }
  });
  return doesPassExist;
};
export default doesPassExist;
