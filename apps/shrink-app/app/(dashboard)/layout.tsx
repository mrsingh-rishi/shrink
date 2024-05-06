import MainPage from "../../components/MainPage";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div>
      <Navbar />
      <div className="w-full flex justify-center ">
        <div className="w-[20%] h-screen  bg-slate-200 ">
          <Sidebar />
        </div>
        <div className="w-[80%] h-screen bg-slate-50 p-10">{children}</div>
      </div>
    </div>
  );
}
