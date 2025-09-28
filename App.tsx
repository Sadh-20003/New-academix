import Navbar from './components/Navbar'
import './App.css'
import HeroSection from './components/HeroSection'
import CurriculamSection from './components/CarriculamSection'
import HowItWorks from './components/HowItWorks'
import ModalForm from './components/ModalForm'
import Testimonials from './components/Testimonials'
import PricingPlans from './components/PricingPlans'
import USPSection from './components/USPSection'
import BottomCTA from './components/BottomCTA'


const App = () => {
  return (
    <>
    <Navbar onOpenTrialModal={function (): void {
        throw new Error('Function not implemented.')
      } } />
    <HeroSection onOpenTrialModal={function (): void {
        throw new Error('Function not implemented.')
      } }/>
    {/* <ModalForm/> */}
    <CurriculamSection/>
    <HowItWorks/>
    <ModalForm isOpen={false} onClose={function (): void {
        throw new Error('Function not implemented.')
      } } title={''} type={'trial'}/>
      <Testimonials/>\
      <PricingPlans/>
      <USPSection/>
      <BottomCTA onOpenTrialModal={function (): void {
        throw new Error('Function not implemented.')
      } } onOpenChatModal={function (): void {
        throw new Error('Function not implemented.')
      } } onOpenCounsellorModal={function (): void {
        throw new Error('Function not implemented.')
      } }/>


    
    
    
    
    </>
  )
}

export default App