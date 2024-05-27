import './App.css'
import Accordions from './Components/Accordions'
import Alerts from './Components/Alerts'
import AppBars from './Components/AppBars'
import Avatars from './Components/Avatars'
import Badges from './Components/Badges'
import Buttons from './Components/Buttons'
import Cards from './Components/Cards'
import Checkboxes from './Components/Checkboxes'
import Chips from './Components/Chips'
import Dialogs from './Components/Dialogs'
import FloatingActionButtons from './Components/FloatingActionButtons'
import Progresses from './Components/Progresses'
import RadioGroups from './Components/RadioGroups'
import Ratings from './Components/Ratings'
import Selecter from './Components/Selecter'
import Skeletons from './Components/Skeletons'
import Sliders from './Components/Sliders'
import Snackbars from './Components/Snackbars'
import Swithches from './Components/Swithches'
import Tables from './Components/Tables'
import TextFields from './Components/TextFields'
import Tooltips from './Components/Tooltips'

function App() {

  return (
    <>
      {/* inputs */}

      <Buttons />
      <Checkboxes />
      <FloatingActionButtons />
      <RadioGroups />
      {/* <Ratings /> */}
      <Selecter />
      <Sliders />
      <Swithches />
      <TextFields />

      {/* Data display */}
      <Avatars />
      <Badges />
      <Chips />
      <Tables />
      <Tooltips />


      {/* Feedbacks */}
      <Alerts />
      <Dialogs />
      <Progresses />
      <Skeletons />
      <Snackbars />
      <Accordions />
      <AppBars />
      <Cards />
    </>
  )
}

export default App
