/* eslint-disable react/prop-types */
const AuthenLayout = ({ children }) => {
  return (
    <div className="relative w-full h-screen bg-[#F7F7F7]">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[#008AFF]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[398px] h-[514px] p-8 rounded-[10px] bg-white">
        <div className="grid grid-rows-4">{children}</div>
      </div>
    </div>
  );
};

export default AuthenLayout;
