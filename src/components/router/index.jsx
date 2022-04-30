import React from "react";
import { Routes, Route } from "react-router-dom";
import LayoutComponent from "./components/LayoutComponent";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import Bar from "./components/echartComponents/Bar";
import RowBar from "./components/echartComponents/RowBar";
import RadialPolar from "./components/echartComponents/RadialPolar"
import FilesView from "./components/FilesView";
import Modal from "./components/Modal";
import ReduxComponentUse from "../ReduxComponentUse";
import SetState from "./components/setState";
import Form from "./components/form";
import ReduxComponent from "../ReduxComponent";
import Flex from './components/flex/flex';
export default function App() {

    return (
        <Routes>
            <Route path="/" element={<LayoutComponent />}>
                <Route index element={<Home />} />
                <Route path="/barEcharts" element={<Bar />} />
                <Route path="/rowBar" element={<RowBar />} />
                <Route path="/radialPolar" element={<RadialPolar />} />
                <Route path="/fileView" element={<FilesView />} />
                <Route path="/modal" element={<Modal />} />
                <Route path="/useDispatch" element={<ReduxComponentUse />} />
                <Route path="/connect" element={<ReduxComponent />} />
                <Route path="/setState" element={<SetState />} />
                <Route path="/form" element={<Form />} />
                <Route path="/flex" element={<Flex />} />
                <Route path="*" element={<NoMatch />} />
            </Route>
            {/* <Route path="login" element={<LoginForm />} /> */}
            <Route path="*" element={() => {
                return <h4>无效路由</h4>
            }} />
        </Routes>
    );
}