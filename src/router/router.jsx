
import {useState} from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Game from '../pages/Game'
import Home from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import DefaultLayout from '../layout/DefaultLayout'
import About from '../pages/About'
import ChooseCharacter from '../Components/ChooseCharacter'
// import {Provider} from 'react-redux'
// import store from '../store/store'


export const AppRouter =()=>{
    const [selectedCharter, setSelectedCharter] = useState("naruto");
    return(
        // <Provider store={store}>
            
        <Router>
            <Routes>
                <Route element={<DefaultLayout/>}>
                <Route exact path='/BhagNarutoBhag/' element={<Home/>}></Route>
                <Route path='/BhagNarutoBhag/game'  element={<Game character={selectedCharter}/>}></Route>
                <Route path='/BhagNarutoBhag/aboutUs' element={<About/>}></Route>
                <Route path='/BhagNarutoBhag/chooseCharacter' element={<ChooseCharacter setSelectedCharter={setSelectedCharter} />}></Route>
                <Route path='*' element={<NotFound/>}></Route>
                </Route>
            </Routes>
        </Router>
        // </Provider>
    )
}