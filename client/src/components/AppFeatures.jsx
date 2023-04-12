export const AppFeatures = () => {
  return (
    <>
      <div className="appfeatures-container">
        <h1 className="font-bold text-2xl text-center mb-10">
          Network <span className="color">features</span>
        </h1>
        <div className="flex items-center justify-center flex-wrap mx-4 gap-4">
          <div className="flex items-center flex-col border border-slate-600 py-4 px-3">
            <i className="fa-solid fa-credit-card text-2xl"></i>
            <h1 className="font-bold mb-2 text-xl">
              Easy <span className="color">Payments</span>
            </h1>
            <p className="text-center w-[20rem] font-[300]">
              with this feature network makes it easy for you because it
              supports all the card so that you dont stress your self.
            </p>
          </div>
          <div className="flex items-center flex-col border border-slate-600 py-4 px-3">
            <i className="fa-solid fa-user text-2xl"></i>
            <h1 className="font-bold mb-2 text-xl">
              Help <span className="color">agants</span>
            </h1>
            <p className="text-center w-[20rem] font-[300]">
              with this feature network makes it easy for you because you can
              request for help with your daily tasks
            </p>
          </div>
          <div className="flex items-center flex-col border border-slate-600 py-4 px-3">
            <i className="fa-solid fa-user-shield text-2xl"></i>
            <h1 className="font-bold mb-2 text-xl">
              Data <span className="color">Protection</span>
            </h1>
            <p className="text-center w-[20rem] font-[300]">
              with this feature network makes it easy for to secure your data
              based on your preferences
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
