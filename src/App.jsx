import './App.css'
import Title from './components/Title'
import TopHeader from './components/TopHeader'
import TopLogo from './components/TopLogo'
import Timeline from './components/Timeline'
import Center from './components/Center'
import Footer from './components/Footer'

function App() {

  return (
    <div className="w-full relative bg-white">
      <TopHeader/>
      <TopLogo/>
      <Title/>
      <Timeline/>
      <Center/>
      <Footer/>
    </div>
  )
}

export default App
