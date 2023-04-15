// COMPONENTS IMPORT
import { LeftNavigation } from "./LeftNavigation";
import  Dashboard  from "./Dashboard";


export const Home = () => {

  return (
    <>
        <div className="flex w-[100vw] h-[100vh]">
          <LeftNavigation />
          <Dashboard />
        </div>
    </>
  );
};
