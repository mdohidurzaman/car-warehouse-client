import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Services from "./components/Home/Services/Services";
import Header from "./components/Share/Header/Header";
import Login from "./components/Login/Login";
import Footer from "./components/Share/Footer/Footer";
import Register from "./components/Register/Register";
import InventoryDetials from "./components/InventoryDetails/InventoryDetails";
import RequireAuth from "./components/Login/RequireAuth/RequireAuth";
import AddService from "./components/AddService/AddService";
import MyItems from "./components/MyItems/MyItems";
import ManageItems from "./components/ManageItems/ManageItems";
import NotFound from "./components/NotFount/NotFound";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/manage" element={<Services></Services>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/manageitems"
          element={<ManageItems></ManageItems>}
        ></Route>
        <Route path="/myitems" element={<MyItems></MyItems>}></Route>
        <Route
          path="/service/:id"
          element={
            <RequireAuth>
              <InventoryDetials></InventoryDetials>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/add"
          element={
            <RequireAuth>
              <AddService></AddService>
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
