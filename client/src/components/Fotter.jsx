
export const Fotter = () => {
  const currentYear = new Date().getFullYear();
  const userLanguage = navigator.language;
  return (
    <>
      <div className="fotter-container">
        <div className="flex items-center justify-between flex-wrap fotter-container-inner">
          <p className="font-[200] text-lg main-para">
            copyright &copy; <span className="color">network.com </span>
            {currentYear}
          </p>
          <p className="lang">{userLanguage}</p>
        </div>
      </div>
    </>
  );
};
