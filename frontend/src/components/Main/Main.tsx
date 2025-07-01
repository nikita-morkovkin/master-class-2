import type {FC, JSX} from "react";
import Services from "../Services/Services.tsx";
import AboutWork from "../AboutWork/AboutWork.tsx";
import ListIcons from "../ListIcons/ListIcons.tsx";
import ShowVideo from "../ShowVideo/ShowVideo.tsx";
import PeoplesReviews from "../PeoplesReviews/PeoplesReviews.tsx";

const Main: FC = (): JSX.Element => (
  <main>
    <Services />
    <AboutWork />
    <ListIcons />
    <ShowVideo />
    <PeoplesReviews />
  </main>
);

export default Main;