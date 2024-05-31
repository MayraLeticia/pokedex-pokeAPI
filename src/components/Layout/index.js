import "./style.scss";
import { Header } from "../../components";


const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <div> {children} </div>
        </div>
    );
}


export default Layout;