import logo from "../image/logo.png";

const LogoHeader = () => {
  return (
    <div className="px-2 sm:px-6 lg:px-8 bg-white shadow-md">
      <div className="relative flex items-center justify-between h-16">
        <img className="h-8 w-auto ml-16 md:ml-36 " src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default LogoHeader;
