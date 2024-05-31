import { ITriggerModalParameters } from '@/app/_noPages/contexts/ModalProvider';
import ModalStandard from './ModalStandard';
const ModalManager = ({
  props,
  setOpen,
  setPromiseResolver,
}: {
  props: ITriggerModalParameters | null;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setPromiseResolver: React.Dispatch<React.SetStateAction<(() => void) | null>>;
}) => {
  if (!props) return;

  const { type, title, content } = props;
  console.log(type, title, content);

  if (type === 'info')
    return <ModalStandard type='info' title={title} content={content} />;
  if (type === 'warning')
    return <ModalStandard type='warning' title={title} content={content} />;
  if (type === 'error')
    return <ModalStandard type='error' title={title} content={content} />;
};

export default ModalManager;
