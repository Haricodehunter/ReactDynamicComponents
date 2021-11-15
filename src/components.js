import React from "react";
import Foo from "./components/Foo";
import Bar from "./components/Bar";
import Carousel from "./components/Carousel";

const Components = {
  foo: Foo,
  bar: Bar,
  carousel: Carousel
};

export default (block) => {
  if (typeof Components[block.component] !== "undefined") {
    return React.createElement(Components[block.component], {
      key: block._uid,
      block: block
    });
  }
  return React.createElement(
    () => <div>The component {block.component} has not been created yet.</div>,
    { key: block._uid }
  );
};
