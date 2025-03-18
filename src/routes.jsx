// Import necessary components and functions from react-router-dom.

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { Demo } from "./pages/Demo";
import Dflex from "./components/d-flex/d-flex";
import Dflex1 from "./components/d-flex/d-flex-1";
import FlexDirection from "./components/direccion/flex-direction"; 
import FlexRow from "./components/direccion/flex-row";
import FlexRowReverse from "./components/direccion/flex-row-reverse";
import FlexColumn from "./components/direccion/flex-column";
import FlexColumnReverse from "./components/direccion/flex-comun-reverse";
import FlexboxExamples from "./components/alineacion/alineacion";
import HorizontalAlignment from "./components/alineacion/horizontalAlignment";
import VerticallAlignment from "./components/alineacion/verticalAlingnment";
import IndividualAlignment from "./components/alineacion/individualAlignment";
import Spacing from "./components/alineacion/spacing ";
import Flexibility from "./components/alineacion/flexibilidad"
import Responsiveness from "./components/alineacion/responsiv"
import CompleteExample from "./components/alineacion/ejemploCompleto";
import Dragonball from "./pages/dragonball"
import CharacterDetail from "./pages/characterDetail"
import DragonBallGet from "./components/api/dragonBallGet";
//import DragonBallGetId from "./pages/dragonBallGetId";



export const router = createBrowserRouter(
    createRoutesFromElements(
    // CreateRoutesFromElements function allows you to build route elements declaratively.
    // Create your routes here, if you want to keep the Navbar and Footer in all views, add your new routes inside the containing Route.
    // Root, on the contrary, create a sister Route, if you have doubts, try it!
    // Note: keep in mind that errorElement will be the default page when you don't get a route, customize that page to make your project more attractive.
    // Note: The child paths of the Layout element replace the Outlet component with the elements contained in the "element" attribute of these child paths.

      // Root Route: All navigation will start from here.
      <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >

        {/* Nested Routes: Defines sub-routes within the BaseHome component. */}
        <Route path= "/" element={<Home />} />
        <Route path="/single/:theId" element={ <Single />} />  {/* Dynamic route for single items */}
        <Route path="/demo" element={<Demo />} />
        <Route path="/dflex" element={<Dflex />} />
        <Route path="/dflex1" element={<Dflex1 />} />
        <Route path="/dFlexDirection" element={<FlexDirection />} />
        <Route path="/flex-row" element={<FlexRow />} />
        <Route path="/flex-row-reverse" element={<FlexRowReverse />} />
        <Route path="/flex-column" element={<FlexColumn />} />
        <Route path="/flex-column-reverse" element={<FlexColumnReverse />} />
        <Route path="/flexboxExamples" element={<FlexboxExamples />} />
        <Route path="/horizontalAlingnment" element={<HorizontalAlignment />} />
        <Route path="/verticalAlignment" element={<VerticallAlignment />} />
        <Route path="/individualAlignment" element={<IndividualAlignment />} />
        <Route path="/spacing" element={<Spacing />} />
        <Route path="/flexibility" element={<Flexibility />} />
        <Route path="/responsiv" element={<Responsiveness />} />
        <Route path="/ejemploCompleto" element={<CompleteExample />} />
        <Route path="/dragonball" element={<Dragonball />} />
        <Route path="/dragonballGet" element={<DragonBallGet />} />
        
        <Route path="/characterDetail/:id" element={<CharacterDetail />} />
      </Route>
    )
);