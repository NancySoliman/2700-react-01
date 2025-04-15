import Header from './Header'
import Footer from './footer'
import  Conter from './conter'
import  { LinkBtn, GroupBtn } from './components/Buttons'


// import { GroupBtn as RbsGbtn } from './React-Bootstap/Button'
import Alert from './Alert'

export default function App() {

  return (
    <div>
      <Header/>
      <Conter/>
      <h2>App Modify 2</h2>
      <p>Lorem, ipsum dolor.</p>
      
      <Alert color='darkgreen' bgColor='lightgreen'>
        <h3>Success Alert</h3>
        <p>Saved Successfully!!!. </p>
      </Alert>
      <Footer/>
    </div>
  )
}


