import '@/styles/globals.css'
import { store } from '../../app/store'
import { Provider } from 'react-redux'
import MainLayout from '@/layout/MainLayout'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }) {
  
  return <>
   <Provider store={store}>
   <MainLayout>
   <Component {...pageProps} />
   </MainLayout>
   <Toaster />
        </Provider>

  </> 
}