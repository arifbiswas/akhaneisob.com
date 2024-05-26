import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Drawer from "@/components/drawer/drawer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../app/reducers/productsReducer";
import { useEffect } from "react";
import { getAllCategories } from "../../app/reducers/categoriesReducer";
import Footer from "@/components/footer/footer";
import Loading from "@/components/loading/loading";
const MainLayout = ({ children }) => {
  const { toggleDrawer } = useSelector((state) => state.toggle);
  const { loading } = useSelector((state) => state.categories);
  const { loading: loading2 } = useSelector((state) => state.products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllCategories());
  }, [dispatch]);
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <div
        className={
          toggleDrawer
            ? "py-5 absolute z-50 w-full top-0 left-0 min-h-screen bg-green-900 transition-all duration-300"
            : "py-5 absolute w-full z-50 top-0 -left-[100%] min-h-screen bg-green-900 transition-all duration-300"
        }
      >
        <Drawer />
      </div>
      <Navbar />
      <main className="flex-1 h-full overflow-auto">
        {loading || loading2 ? <Loading /> : <>{children}</>}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
