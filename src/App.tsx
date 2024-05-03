import './App.css'
import Layout from './components/Layout'
import { BrowserRouter } from 'react-router-dom';
import CommomRoutes from './routes';


function App() {
  return (
    <BrowserRouter>
      <Layout >
        <CommomRoutes />
      </Layout>
    </BrowserRouter>
  )
}

export default App
