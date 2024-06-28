import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Button, { ButtonProps } from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const LeftButton = Template.bind({});
LeftButton.args = {
  onClick: () => alert("Left Button Clicked"),
  direction: "left",
};

export const RightButton = Template.bind({});
RightButton.args = {
  onClick: () => alert("Right Button Clicked"),
  direction: "right",
};
