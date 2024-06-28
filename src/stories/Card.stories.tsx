import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import CardSlider, { CardSliderProps } from "../components/CardSlider";

export default {
  title: "Components/CardSlider",
  component: CardSlider,
} as Meta;

const Template: StoryFn<CardSliderProps> = (args) => <CardSlider {...args} />;

export const ExampleCardSlider1 = Template.bind({});
ExampleCardSlider1.args = {
  cards: [
    {
      PaymentSystem: "Visa",
      FirstName: "John",
      LastName: "Doe",
      CardNumber: "1234567890123456",
      Role: "User",
      Status: "Active",
      Logo: "https://via.placeholder.com/50",
    },
    {
      PaymentSystem: "MasterCard",
      FirstName: "Jane",
      LastName: "Smith",
      CardNumber: "6543210987654321",
      Role: "Admin",
      Status: "Inactive",
      Logo: "https://via.placeholder.com/50",
    },
  ],
};
