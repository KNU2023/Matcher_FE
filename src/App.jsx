import './App.css'
import IconboxReserve from './components/organisms/button/IconboxReserve'
import IconboxJob from './components/organisms/button/IconboxJob'
import IconboxMail from './components/organisms/button/IconboxMail'
import Signinbutton from './components/molecules/button/Signinbutton'
import ButtonLogout from './components/organisms/button/ButtonLogout'

function App() {

  return (
    <>
      <IconboxReserve />
      <IconboxJob />
      <IconboxMail />
      <Signinbutton title="회원가입"/>
      <ButtonLogout />
    </>
  )
}

export default App
