import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
export const BankAccount = () => {
  return (
    <>
      <div className="bankaccount-container flex flex-wrap items-center justify-between">
        <div className="bank-info">
          <h1 className="font-bold text-3xl mb-4">
            Network <span className="color">Bank account</span>
          </h1>
          <p className="font-[300] max-w-[40rem] mb-4">
            You can also use our our bank system we have a virtual card that
            will help you get more features out of network as a system more
            features awaits for you the bank account is the way to start
          </p>
          <Link className="aa font-[500] border border-[#8ABB3A] p-[0.7rem] text-md hover:text-gray-600 inline-block mb-4">
            Learn More
          </Link>
        </div>
        <div className="circles">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
        </div>
        <div className="card">
          <div className="card__front card__part">
            <img
              className="card__front-square card__square drop-shadow-2xl"
              src={Logo}
            />
            <img
              className="card__front-logo card__logo"
              src="https://th.bing.com/th/id/R.08af4fe3898f3ec5636518b704d10f05?rik=GlgP%2bsxPXoUoAg&pid=ImgRaw&r=0"
            />
            <p className="card_numer">**** **** **** 6258</p>
            <div className="card__space-75">
              <span className="card__label">Card holder</span>
              <p className="card__info">Network</p>
            </div>
            <div className="card__space-25">
              <span className="card__label">Expires</span>
              <p className="card__info">10/25</p>
            </div>
          </div>

          <div className="card__back card__part">
            <div className="card__black-line"></div>
            <div className="card__back-content">
              <div className="card__secret">
                <p className="card__secret--last">420</p>
              </div>
              <img
                className="card__back-square card__square drop-shadow-2xl"
                src={Logo}
              />
              <img
                className="card__back-logo card__logo"
                src="https://th.bing.com/th/id/R.08af4fe3898f3ec5636518b704d10f05?rik=GlgP%2bsxPXoUoAg&pid=ImgRaw&r=0"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
