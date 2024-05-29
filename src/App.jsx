import './App.css'
import Accordions from './Components/Accordions'
import Alerts from './Components/Alerts'
import AppBars from './Components/AppBars'
import Avatars from './Components/Avatars'
import Badges from './Components/Badges'
import BottomNavigations from './Components/BottomNavigations'
import BreadCrumbs from './Components/BreadCrumbs'
import Buttons from './Components/Buttons'
import Cards from './Components/Cards'
import Checkboxes from './Components/Checkboxes'
import Chips from './Components/Chips'
import Dialogs from './Components/Dialogs'
import Drawers from './Components/Drawers'
import FloatingActionButtons from './Components/FloatingActionButtons'
import ImageLists from './Components/ImageLists'
import Menus from './Components/Menus'
import Modals from './Components/Modals'
import Paginations from './Components/Paginations'
import PopOvers from './Components/PopOvers'
import Progresses from './Components/Progresses'
import RadioGroups from './Components/RadioGroups'
import Ratings from './Components/Ratings'
import Selecter from './Components/Selecter'
import Skeletons from './Components/Skeletons'
import Sliders from './Components/Sliders'
import Snackbars from './Components/Snackbars'
import SpeedDials from './Components/SpeedDials'
import Stapers from './Components/Stapers'
import Swithches from './Components/Swithches'
import Tables from './Components/Tables'
import Tabses from './Components/Tabses'
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
      <Ratings />
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

      {/* Surfaces */}
      <Accordions />
      <AppBars />
      <Cards />

      {/* Navigations */}
      <BottomNavigations />
      <BreadCrumbs />
      <Drawers />
      <Menus />
      <Paginations />
      <SpeedDials />
      <Tabses />
      <Stapers />

      {/* Layout */}
      <ImageLists />
      <Modals />
      <PopOvers />
    </>
  )
}

export default App
