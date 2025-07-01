import type {FC, JSX} from "react";
import Services from "../Services/Services.tsx";
import AboutWork from "../AboutWork/AboutWork.tsx";
import ListIcons from "../ListIcons/ListIcons.tsx";
import ShowVideo from "../ShowVideo/ShowVideo.tsx";
import PeoplesReviews from "../PeoplesReviews/PeoplesReviews.tsx";
import StockComponent from "../StockComponent/StockComponent.tsx";
import AdsComponent from "../AdsComponent/AdsComponent.tsx";
import OurExpects from "../OurExperts/OurExpects.tsx";

const Main: FC = (): JSX.Element => (
  <main>
    <Services />
    <AboutWork />
    <ListIcons />
    <ShowVideo />
    <PeoplesReviews />
    <StockComponent />
    <AdsComponent />
    <OurExpects />
  </main>
);

export default Main;