var axios = require("axios");
var clientConfig = require("../clientConfig")
var root = clientConfig.appUrl;

export const registerUser = (userDto) =>  {
  return axios.post(root + "/auth/signup", {
    userName: userDto.email,
    password: userDto.password1,
    name: userDto.name,
    mobile: true
  });
};
