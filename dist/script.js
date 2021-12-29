import m from "https://cdn.skypack.dev/mithril@2.0.4";

let Data = {
  things: [
  { icon: "💻", content: "C Programming Language" },
  { icon: "💻", content: "Go Programming Language" },
  { icon: "☕", content: "Arabica Coffee" },
  { icon: "🍕", content: "Pizza Prosciutto" },
  { icon: "🖥", content: "MacOS" },
  { icon: "🖥", content: "Fedora Linux" },
  { icon: "🖱", content: "Mx Master Mouse" },
  { icon: "🔊", content: "Harmon Kardon Speaker Set" },
  { icon: "💛", content: "Mithril.js" },
  { icon: "📷", content: "Nikon" },
  { icon: "💾", content: "Unraid" },
  { icon: "🎬", content: "Plex" },
  { icon: "📻", content: "Alfa Network Adapter" }] };



let things = {
  view: function (vnode) {
    return Data.things.map(function (thing) {
      return m("li", {
        "data-icon": thing.icon,
        "data-content": thing.content });

    });
  } };


m.render(document.body, [
m("div", { class: "container" }, [
m("h1", "Amazing Things"),
m("ul", m(things))])]);