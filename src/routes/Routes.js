import { Routes as ReactDomRoutes, Route } from "react-router-dom";

function Routes() {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/photos" element={<Photos />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<PageNotFound />} />
    </ReactDomRoutes>
  );
}

export default Routes;
