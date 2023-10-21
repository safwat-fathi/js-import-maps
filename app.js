// if (HTMLScriptElement.supports("importmap")) {
// 	console.log("supports");
// }

import moment from "moment";
// import { flatten } from "lodash";
import { render } from "react-dom";
import h from "./helpers/htm-create-element.js";
import App from "./components/App.js";

console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));

// const a = [[1], [1, 2], [0]];

// console.log(flatten(a));

// const App = () => {
//   return h`<div>Hello from App</div>`;
// };
// render(createElement("h1", null, "Hello"), document.getElementById("root"));
render(h`<${App}/>`, document.getElementById("root"));
// // const el = document.createElement("h1");
// // const words = "hello, world";
// // const text = document.createTextNode(startCase(words));
// // const text = document.createTextNode(words);
// // el.appendChild(text);

// // document.body.appendChild(el);
