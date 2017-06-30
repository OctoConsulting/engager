export default function(state = {
  user: {
    name: "Karam",
    email: "karam.hijazi@octoconsulting.com",
    twitter: "karam.hijazi"
  }
}, action) {
  console.log(action.type);
  console.log("in personal reducer");
  return state;
}
