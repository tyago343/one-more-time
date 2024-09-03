import React, { ReactNode } from 'react';

interface OverlayProps {
  content?: ReactNode;
}

const Overlay: React.FC<OverlayProps> = ({ content }) => {
  return (
    <div
      aria-label="Loading..."
      className="overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    >
      {content && <div aria-label="Loading...">{content}</div>}
    </div>
  );
};

export default Overlay;
