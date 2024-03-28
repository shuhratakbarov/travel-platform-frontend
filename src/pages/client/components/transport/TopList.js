import {Badge, Card, Col, Row} from "antd";
import ServiceList from "../../../../services/ServiceList";

const TopList = () => {
    const topWatchedTransports = [
        {
            title: "Taksi xizmati",
            name: "Taksi xizmati",
            description: "Sayohat ehtiyojlaringiz uchun taksi buyurtma qiling.",
            image: "taxi.png",
            watchedCount: 100,
            price: "1000$"
        },
        {
            title: "Avtobus xizmati",
            name: "Avtobus xizmati",
            description: "Guruh sayohatlari uchun avtobus xizmatlarimiz bilan tanishing.",
            image: "taxi.png",
            watchedCount: 80,
            price: "1000$"
        },
        {
            title: "Ijaraga avtomobil",
            name: "Ijaraga avtomobil",
            description: "Sizga qulaylik uchun mashina ijaraga oling.",
            image: "taxi.png",
            watchedCount: 60,
            price: "1000$"
        },
        {
            title: "Poyezd xizmati",
            name: "Poyezd xizmati",
            description: "Qulay sayohat uchun poezdda sayohat qiling.",
            image: "taxi.png",
            watchedCount: 50,
            price: "1000$"
        },
        {
            title: "Ijaraga velosiped",
            name: "Ijaraga velosiped",
            description: "Manzillarni kashf qilish uchun velosiped ijaraga oling.",
            image: "taxi.png",
            watchedCount: 40,
            price: "1000$"
        },
        {
            title: "Qayiq xizmati",
            name: "Qayiq xizmati",
            description: "Qayiq xizmatimiz bilan manzarali marshrutlardan rohatlaning.",
            image: "taxi.png",
            watchedCount: 30,
            price: "1000$"
        },
    ];

    return (
        <div style={{height: "auto", margin: "2vh"}}>
            <p style={{textAlign: "center", fontSize: "5vh"}}>
                Mashhur transport xizmatlarimiz
            </p>
            <ServiceList servicesData={topWatchedTransports}/>
        </div>
    );
}
export default TopList;