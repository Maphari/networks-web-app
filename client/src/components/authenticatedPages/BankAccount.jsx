import { LeftNavigation } from "./LeftNavigation";
import BankCard from "./BankCard";

export default function BankAccount() {
  return (
    <section className="flex w-[100vw] h-[100vh]">
      <LeftNavigation />
      <section className="bank-account-container">
        <div className="dashboard-container__top-header relative mb-5">
          <span className="absolute h-10 w-10 bg-[#8abb3a] rounded-full"></span>
          <h1 className="relative z-50 ml-2">
            <span className="text-white">B</span>ank account
          </h1>
        </div>
        <section className="dashborad-container__bankcard mb-5">
          <BankCard
            balance="3000"
            option="Credit"
            accountNumber="**************6453"
          />
        </section>
      </section>
    </section>
  );
}
