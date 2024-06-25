import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import router from './router';

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position='top-right'
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </>
  );
}

export default App;
