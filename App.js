import Content from "./components/Content";
import Footer from "./components/Footer";

import WebContextProvider from './components/WebContext.js'

function App() {
  return (
    <div className='container-fluid'>
      <WebContextProvider>
        <Content />
        <Footer />
      </WebContextProvider>
    </div>
  );
}

export default App;
