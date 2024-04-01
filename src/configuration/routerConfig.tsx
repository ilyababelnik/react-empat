import ContactPage from 'pages/ContactPage';
import ErrorPage from 'pages/ErrorPage';
import Layout from 'pages/Layout';
import MainPage from 'pages/MainPage';
import ServicesPage from 'pages/ServicesPage';
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const basename = '/react-empat';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route
        index
        element={
          <Layout>
            <MainPage />
          </Layout>
        }
      />

      <Route
        path="/contact"
        element={
          <Layout simpleFooterMod>
            <ContactPage />
          </Layout>
        }
      />

      <Route
        path="/services"
        element={
          <Layout>
            <ServicesPage />
          </Layout>
        }
      />

      <Route
        path="*"
        element={
          <Layout>
            <ErrorPage />
          </Layout>
        }
      />
    </Route>,
  ),
  {basename}
);

export default router;
