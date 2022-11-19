const SmCardRender = ({ children }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="rounded-lg shadow-lg p-8 m-4 ">{children}</div>
    </div>
  );
};

export default SmCardRender;
