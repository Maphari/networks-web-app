// COMPONENTS IMPORTS
import { Nav } from "./Nav";
import { AppShowcase } from "./AppShowcase";
import { AppFeatures } from "./AppFeatures";
import { Laptop } from "./Laptop";
import { BankAccount } from "./BankAccount";
import { Mobile } from "./Mobile";
import { Fotter } from "./Fotter";

export const LandingPage = () => {
  return (
    <>
      <Nav />
      <AppShowcase />
      <AppFeatures />
      <Laptop />
      <BankAccount />
      <Mobile />
      <Fotter />
    </>
  );
};
