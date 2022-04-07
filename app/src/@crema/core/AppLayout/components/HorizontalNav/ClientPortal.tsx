import React, {ReactNode, useEffect, useRef, useState} from 'react';
import {createPortal} from 'react-dom';

interface ClientOnlyPortalProperties {
  children: ReactNode;
  selector: string;
}

const ClientOnlyPortal: React.FC<ClientOnlyPortalProperties> = ({children, selector}) => {
  const reference = useRef<Element>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    reference.current = document.querySelector(selector) as HTMLElement;
    setMounted(true);
  }, [selector]);

  return mounted ? createPortal(children, reference.current!) : null;
};

export default ClientOnlyPortal;
