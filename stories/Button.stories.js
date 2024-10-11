import "./button.css";
import { fn } from "@storybook/test";
import Mustache from "mustache";

import Button from "./Button.mustache?raw";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "Example/Button",
  tags: ["autodocs"],
  render: (args) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return Mustache.render(Button, {
      ...args,
      // FIXME: not familiar
      sizeClass: () => `storybook-button--${args.size ?? "medium"}`,
      primaryClass: () => (args.primary ? "storybook-button--primary" : ""),
    });
  },
  argTypes: {
    backgroundColor: { control: "color" },
    label: { control: "text" },
    onClick: { action: "onClick" },
    primary: { control: "boolean" },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Secondary = {
  args: {
    label: "Button",
  },
};

export const Large = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small = {
  args: {
    size: "small",
    label: "Button",
  },
};
