import { Route, Routes } from 'react-router-dom';
import { LibraryPage } from '../../pages';
import HeaderNav from '../header-nav';

const App = () => {
    return(
        <div>
            <Routes>
                <Route path = '/' component = {LibraryPage} exact /> 
                    {/* <Route path = '/basket' component = {} />
                    <Route path = '/' component = {} /> */}
                </Routes>   
            <HeaderNav/>
        </div>
    )
}

export default App