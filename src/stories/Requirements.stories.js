import React from 'react';
import {Requirements} from "../components/Requirements";

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Requirements',
    component: Requirements,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Requirements {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: 'Requirements',
};