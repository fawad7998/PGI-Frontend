import logo from './logo.svg';
import './App.css';
// import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppRoutes } from './route/RoutConstant';
import PrivateRouts from './route/PrivateRoutes';
import Sign_in from './pages/SignIn';
import SignIn from './pages/SignIn';
import { ToastContainer } from 'react-toastify';
import Header from './pages/Header';
import SignUp from './pages/SignUp.jsx';
import ForgetPassword from './pages/ForgetPassword';
import Navbar from './components/utils/naveBarComponents/Navbar';
import Main from './components/utils/dashboard/pages/Main';
import Layout from './components/utils/dashboard/Layout';
import ShiftList from './components/utils/dashboard/pages/ShiftList';
import TimeClock from './components/utils/dashboard/pages/TimeClock';
import Cnacelled from './pages/Cancelled';
import Cancelled from './pages/Cancelled';
import Pattern from './components/utils/dashboard/pages/Pattern';
import ScheduleCalendar from './components/utils/dashboard/pages/ScheduleCalendar';
import Location from './components/utils/dashboard/pages/Location';
import ImportLocation from './components/utils/dashboard/pages/ImportLocation';
import PeopleRole from './components/utils/dashboard/pages/PeopleRole';
import TimeClockMap from './components/utils/dashboard/pages/TimeClockMap';
import PayCharge from './components/utils/dashboard/pages/PayCharge';
import PayRulesList from './components/utils/dashboard/pages/PayRulesList';
import PayInvoicingReport from './components/utils/dashboard/pages/PayInvoicingReport';
import AddLocation from './components/utils/dashboard/pages/AddLocation';
import LocationClient from './components/utils/dashboard/pages/LocationClient';
import Qualifications from './components/utils/dashboard/pages/Qualifications.jsx';
import Health from './components/utils/dashboard/pages/Health.jsx';

function App() {
  return (
    <>
      {/* <Navbar /> */}

      <ToastContainer />
      <Router>
        <>
          <Routes>
            {/* <Route element={<PrivateRouts />}> */}
            {/* </Route> */}
            <Route path={AppRoutes.Sign_in} element={<SignIn />} />
            <Route path={AppRoutes.Sign_up} element={<SignUp />} />
            <Route
              path={AppRoutes.FORGET_PASSWORD}
              element={<ForgetPassword />}
            />
            <Route path={AppRoutes.Dashboard} element={<Layout />}>
              <Route path={''} element={<Main />} />
              <Route path={AppRoutes.ShiftList} element={<ShiftList />} />
              <Route
                path={AppRoutes.Dashboard + AppRoutes.Time_Clock}
                element={<TimeClock />}
              />
              <Route
                path={AppRoutes.Dashboard + AppRoutes.Cancelled}
                element={<Cancelled />}
              />
              <Route
                path={AppRoutes.Dashboard + AppRoutes.Pattern}
                element={<Pattern />}
              />
              <Route
                path={AppRoutes.Dashboard + AppRoutes.ScheduleCalendar}
                element={<ScheduleCalendar />}
              />
              <Route
                path={AppRoutes.Dashboard + AppRoutes.Location}
                element={<Location />}
              />
              <Route
                path={AppRoutes.Dashboard + AppRoutes.ImportLocation}
                element={<ImportLocation />}
              />
              <Route
                path={AppRoutes.Dashboard + AppRoutes.PeopleRole}
                element={<PeopleRole />}
              />
              <Route
                path={AppRoutes.Dashboard + AppRoutes.TimeClockMap}
                element={<TimeClockMap />}
              />
              <Route
                path={AppRoutes.Dashboard + AppRoutes.PayCharge}
                element={<PayCharge />}
              />
              <Route
                path={AppRoutes.Dashboard + AppRoutes.payRulesList}
                element={<PayRulesList />}
              />
              <Route
                path={AppRoutes.Dashboard + AppRoutes.PayInvoicingReport}
                element={<PayInvoicingReport />}
              />
              <Route
                path={AppRoutes.Dashboard + AppRoutes.AddLocation}
                element={<AddLocation />}
              />
              <Route
                path={AppRoutes.Dashboard + AppRoutes.LocationClient}
                element={<LocationClient />}
              />
              <Route
                path={AppRoutes.Dashboard + AppRoutes.Qualifications}
                element={<Qualifications />}
              />
              <Route
                path={AppRoutes.Dashboard + AppRoutes.Health}
                element={<Health />}
              />
            </Route>
          </Routes>
        </>
      </Router>
    </>
  );
}

export default App;
