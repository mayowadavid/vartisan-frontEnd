import MainContextProvider from "../context/mainContext";

const Layout = (props) => {
return (
       <MainContextProvider>
          {props.children}
       </MainContextProvider>
       )
}
export default Layout;