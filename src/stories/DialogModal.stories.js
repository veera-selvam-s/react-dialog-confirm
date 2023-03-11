import React from 'react';
import {DialogModal} from "../components/DialogModal";

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'DialogModal',
    component: DialogModal,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <DialogModal {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
};