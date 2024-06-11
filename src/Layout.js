import { useState } from "react";
import { adjustWidth } from "./Utils/commonFunctions";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
// import Sidebar from "./Components/Sidebar/Sidebar";

const Layout = ({children}) => {
    
    return (
        <div >
            <div className="container-fluid page-body-wrapper">
                <Header/>
                
                <div className="main-panel">
                    <div className="content-wrapper">
                        <div className="row" style={{paddingTop : '100px'}}>
                            <div className="col-12 grid-margin">
                                {/* <div className={`${children === '<Profile/>' ? '' : 'card'}`}> */}
                                    {/* <div className="card-body"> */}
                                    {children}
                                    {/* </div> */}
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Layout;