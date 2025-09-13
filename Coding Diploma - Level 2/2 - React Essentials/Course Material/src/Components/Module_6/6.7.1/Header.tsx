interface HeaderProps {
  title: string;
  subTitle: string;
}

const Header = ({ title, subTitle }: HeaderProps) => {
  return (
    <header
      id="header"
      className="flex flex-col justify-center text-center px-4 sm:px-6 md:px-12 py-8"
    >
      <img
        src="/investme.svg"
        alt="logo"
        className="w-32 sm:w-40 md:w-56 lg:w-72 object-contain bg-transparent mx-auto mb-4"
      />

      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-300">
        {title}
      </h1>
      <h4 className="mt-1 text-sm sm:text-base md:text-lg lg:text-xl text-gray-400">
        {subTitle}
      </h4>
    </header>
  );
};

export default Header;
