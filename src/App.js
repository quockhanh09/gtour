import Footer_Tour from './Components/Footer_Tour';
import Header_Tour from './Components/Header_Tour';
import Container1 from './Views/Container1';
import Container2 from './Views/Container2';
import 'semantic-ui-css/semantic.min.css'
import Home from './Views/Home';

function App() {
  return (
    <>
      <Header_Tour/>
      <Container1/>
      <Container2/>
        <Home/>
      <Footer_Tour/>
    </>
  );
}

export default App;
