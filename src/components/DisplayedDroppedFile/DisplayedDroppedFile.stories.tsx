import { DisplayedDroppedFile, DisplayedDroppedFileProps } from "./DisplayedDroppedFile";
import { Story } from '@storybook/react'

export default {
    title: 'Components/Displayed Dropped File',
    component: DisplayedDroppedFile
}

const Template: Story<DisplayedDroppedFileProps> = (args) => <DisplayedDroppedFile {...args} />

export const DisplayedDroppedFiles = Template.bind({});

DisplayedDroppedFiles.args = {
    fileName: 'peta.jpg'
}