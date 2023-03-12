import React from 'react';
import { DialogModal, DialogProvider, useModal } from '../components/DialogModal';

export default {
  title: 'DialogModal',
  component: DialogModal
};

const App = (props) => {
  const { openModal } = useModal()
  const handleClick = () => {
    openModal(<DialogModal {...props} />);
  }
  return(
    <div>
      <button onClick={handleClick} className={'dialog--button dialog--button-confirm'}>
                Open modal
      </button>
    </div>
  )
}
const Template = (args) => (
  <DialogProvider>
    <App {...args} />
  </DialogProvider>
)

export const Success = Template.bind({});
Success.args = {
  icon:'success',
  title:'Successfully accepted!',
  titleStyle:{},
  description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ' +
        'ut labore et dolore magna aliqua. Nunc eget lorem dolor sed viverra ipsum nunc. Consequat id porta ' +
        'nibh venenatis.',
  descriptionStyle:{},
  confirm:'Dashboard',
  confirmStyle:{},
  onConfirm:() => {},
  hasCancel:true,
  cancelStyle:{},
  onCancel:() => {}

};
export const Info = Template.bind({});
Info.args = {
  icon:'info',
  title:'Modal title',
  description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ' +
        'ut labore et dolore magna aliqua. Nunc eget lorem dolor sed viverra ipsum nunc. Consequat id porta ' +
        'nibh venenatis.'
};

export const Warning = Template.bind({});
Warning.args = {
  icon:'warning',
  title:'Are you sure?',
  confirm:'Yes',
  hasCancel:true,
  cancel:'No'
};

export const Error = Template.bind({});
Error.args = {
  icon:'error',
  title:'something went wrong'
};

export const Default = Template.bind({});
Default.args = {
  title:'Modal title'
};