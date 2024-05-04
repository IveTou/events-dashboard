import './App.css'
import Layout from './layouts/Layout'
import { BrowserRouter } from 'react-router-dom';
import CommomRoutes from './routes';
import { EventProvider } from './context/Event';


function App() {
  return (
    <BrowserRouter>
      <EventProvider>
        <Layout >
          <CommomRoutes />
        </Layout>
      </EventProvider>
    </BrowserRouter>
  )
}

export default App
