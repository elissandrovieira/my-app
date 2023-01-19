import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import TemplateDefault from './templates/Default'
import TemplatePage from './templates/Page'

import Home from './pages/Home'
import Customers from './pages/Customers'

const App = () => {
  return (
    <Router>
      <TemplateDefault>
        <Routes>
          <Route path="/" element={
              <TemplatePage
                title="Homepage"
                Component={Home}
              />
            }
          />
          <Route path="/customers" element={
              <TemplatePage
                title="Customers"
                Component={Customers}
              />
            }
          />
        </Routes>
      </TemplateDefault>
    </Router>
  )
}

export default App
