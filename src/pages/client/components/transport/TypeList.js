import {Badge, Card, Col, Row} from "antd";
import serviceList from "../../../../services/ServiceList";
import ServiceList from "../../../../services/ServiceList";

const TypeList = () => {
    const transportServices = [
        {
            title: "Taksi xizmati",
            name: "Taksi xizmati",
            description: "Sayohat ehtiyojlaringiz uchun taksi buyurtma qiling.",
            image: "taxi.png",
            watchedCount: 10,
            price: "1000$"
        },
        {
            title: "Avtobus xizmati",
            name: "Avtobus xizmati",
            description: "Guruh sayohatlari uchun avtobus xizmatlarimiz bilan tanishing.",
            image: "taxi.png",
            watchedCount: 20,
            price: "1000$"
        },
        {
            title: "Ijaraga avtomobil",
            name: "Ijaraga avtomobil",
            description: "Sizga qulaylik uchun mashina ijaraga oling.",
            image: "taxi.png",
            watchedCount: 15,
            price: "1000$"
        },
        {
            title: "Poyezd xizmati",
            name: "Poyezd xizmati",
            description: "Qulay sayohat uchun poezdda sayohat qiling.",
            image: "taxi.png",
            watchedCount: 18,
            price: "1000$"
        },
        {
            title: "Qayiq xizmati",
            name: "Qayiq xizmati",
            description: "Qayiq xizmatimiz bilan manzarali marshrutlardan rohatlaning.",
            image: "taxi.png",
            watchedCount: 12,
            price: "1000$"
        },
        {
            title: "Ijaraga velosiped",
            name: "Ijaraga velosiped",
            description: "Manzillarni kashf qilish uchun velosiped ijaraga oling.",
            image: "taxi.png",
            watchedCount: 8,
            price: "1000$"
        },
    ];

    return (
        <div style={{height: "auto", margin: "2vh"}}>
            <p style={{textAlign: "center", fontSize: "5vh"}}>
                O'zingizga qulay transport xizmatlarimizdan foydalaning
            </p>
            <ServiceList servicesData={transportServices} />
        </div>
    );
}
export default TypeList;
