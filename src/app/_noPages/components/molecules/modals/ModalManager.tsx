import { IModalManagerProps } from "@/app/_noPages/contexts/ModalProvider";
import ModalStandard from "./ModalStandard";
import { useRouter } from "next/router";

const ModalManager = ({ props }: { props: IModalManagerProps | null }) => {
  if (!props) return;

  const {
    type,
    title,
    content,
    mainButtonParameters,
    secondaryButtonParameters,
    multipleButtons,
    setOpen,
    resolver,
    redirection,
  } = props;

  if (type === "info")
    return (
      <ModalStandard
        type="info"
        title={title}
        content={content}
        setOpen={setOpen}
        resolver={resolver}
        redirection={redirection}
        mainButtonParameters={mainButtonParameters}
      />
    );
  if (type === "warning")
    return (
      <ModalStandard
        type="warning"
        title={title}
        content={content}
        setOpen={setOpen}
        resolver={resolver}
        redirection={redirection}
        mainButtonParameters={mainButtonParameters}
      />
    );
  if (type === "error")
    return (
      <ModalStandard
        type="error"
        title={title}
        content={content}
        setOpen={setOpen}
        resolver={resolver}
        redirection={redirection}
        mainButtonParameters={mainButtonParameters}
      />
    );
};

export default ModalManager;
