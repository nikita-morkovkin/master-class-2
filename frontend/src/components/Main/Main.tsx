import type {FC, JSX} from "react";
import Services from "../Services/Services.tsx";
import AboutWork from "../AboutWork/AboutWork.tsx";

const Main: FC = (): JSX.Element => (
  <main>
    <Services />
    <AboutWork />
  </main>
);

export default Main;