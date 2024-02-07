import ApiCovid from './ApiCovid';
import './App.css';
import Form from './login';
// import useCovidData from './ApiCovid';
import ComponentC from './contexthook/ComponentC';
import UseCovidData from './ApiCovid';

function App() {
  // const covidData = useCovidData();
  return (
    <>
    <UseCovidData></UseCovidData>
    </>
  )
}
export default App;
