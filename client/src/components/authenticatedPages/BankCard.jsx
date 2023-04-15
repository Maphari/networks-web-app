import CardLogo from "../../assets/logo.png";
import MasterLogo from "../../assets/masterlogo.png";

export default function (props) {
  const { balance, option, accountNumber } = props;
  return (
    <section>
      <div className="mb-3">
        <div className="flex items-center gap-1">
          <i className="fa-solid fa-circle-exclamation text-2xl text-[#1E1E1E]"></i>
          <h1 className="font-[700] text-2xl">Card limit 2</h1>
        </div>
        <p className="opacity-50">
          You cannot add another credit card when you still have an outstanding
          credit.
        </p>
      </div>
      <div className="flex items-center gap-3">
        <div className="bg-[#1E1E1E] text-white p-[20px] rounded-xl h-[12rem] w-[22rem]">
          <div className="flex items-center justify-between mb-4">
            <h1 className="opacity-50 font-medium text-xl">
              Available balance
            </h1>
            <div className="flex items-center gap-2">
              <p className="opacity-50">{option}</p>
              <div className="bg-[#050505] p-2 h-6 w-10 rounded-2xl flex items-center justify-start">
                <div className="h-4 w-4 rounded-full bg-white"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mb-4">
            <h1 className="opacity-50 font-bold text-3xl">R {balance}.00</h1>
          </div>
          <div className="flex items-center justify-between">
            <p className="opacity-50">{accountNumber}</p>
            <img
              src={CardLogo}
              alt="mastercard logo"
              className="w-10 h-10 object-cover"
            />
          </div>
        </div>
        <div className="bg-[#1E1E1E] text-white flex items-center justify-center p-3 rounded-2xl hover:cursor-pointer">
          <i className="fa-solid fa-plus"></i>
        </div>
      </div>
    </section>
  );
}
