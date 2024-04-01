import ContactPage from 'pages/ContactPage';
import ErrorPage from 'pages/ErrorPage';
import Layout from 'pages/Layout';
import MainPage from 'pages/MainPage';
import ServicesPage from 'pages/ServicesPage';
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/react-empat">
      <Route
        index
        element={
          <Layout>
            <MainPage />
          </Layout>
        }
      />

      <Route
        path="/react-empat/contact"
        element={
          <Layout simpleFooterMod>
            <ContactPage />
          </Layout>
        }
      />

      <Route
        path="/react-empat/services"
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
);

export default router;
