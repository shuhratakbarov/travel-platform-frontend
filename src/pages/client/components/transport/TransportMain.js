import {Component, Fragment} from "react";
import {Badge, Card, Col, Row} from "antd";
import TypeList from "./TypeList";
import TopList from "./TopList";
import TransportSearchForm from "./Search";

class TransportMain extends Component {

    render() {
        return (
            <Fragment>
                <p style={{
                    fontFamily: "sans-serif",
                    color: "black",
                    textAlign: "center",
                    fontSize: "5vh",

                    padding: 0,
                }}>Transport xizmatlarimizga xush kelibsiz</p>
                <div style={{
                    backgroundImage: "url('/images/taxi.png')",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    height: window.innerHeight,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>

                </div>
                <TransportSearchForm/>
                <TypeList/>
                <TopList/>
            </Fragment>
        );
    }
}

export default TransportMain;