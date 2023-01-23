import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import TemplateDefault from './templates/Default'
import TemplatePage from './templates/Page'
import TemplateClean from './templates/Clean'

import Home from './pages/Home'
import CustomersList from './pages/customers/List'
import CustomersRegister from './pages/customers/Register'
import CustomersEdit from './pages/customers/Edit'
import Login from './pages/Login'



const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<TemplateDefault
        TemplateDefault />}>

          <Route path="/home" element={
              <TemplatePage
                title="Homepage"
                Component={Home}
              />
            }
          />
          <Route path="/customers" element={
              <TemplatePage
                title="Customers list"
                Component={CustomersList}
              />
            }
          />
          <Route path="/customers/add" element={
              <TemplatePage
                title="Register customer"
                Component={CustomersRegister}
              />
            }
          />
          <Route path="/customers/edit/:id" element={
              <TemplatePage
                title="Edit customer"
                Component={CustomersEdit}
              />
            }
          />
        </Route>
        <Route element={<TemplateClean />}>
        <Route path="/" element={
              <TemplatePage
                title="Restricted access"
                Component={Login}
              />
            }
          />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
