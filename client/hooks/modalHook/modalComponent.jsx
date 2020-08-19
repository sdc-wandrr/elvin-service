/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { BaseModalBackground } from './baseStyles.jsx';
import { Provider } from './context.jsx';

const ModalComponent = ({
  backgroundComponent: propsBackgroundComponent,
  children,
}) => {
  const modalNode = useRef(null);
  const [stateModalNode, setStateModalNode] = useState(null);
  const [BackgroundComponent, setBackgroundComponent] = useState(
    BaseModalBackground,
  );

  useEffect(() => {
    if (propsBackgroundComponent) {
      setBackgroundComponent(propsBackgroundComponent);
    }
  }, [setBackgroundComponent, propsBackgroundComponent]);

  useEffect(() => {
    setStateModalNode(modalNode.current);
  }, [setStateModalNode, modalNode]);

  return (
    <Provider
      value={{
        modalNode: stateModalNode,
        BackgroundComponent,
      }}
    >
      {children}
      <div ref={modalNode} />
    </Provider>
  );
};

ModalComponent.propTypes = {
  backgroundComponent: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default ModalComponent;
