import React from "react";

const GalleryLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>Gallery Layout</h1>
      {children}
    </div>
  );
};

export default GalleryLayout;
