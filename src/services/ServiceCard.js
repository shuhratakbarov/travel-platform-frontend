import React from 'react'
import './service-card.css'
import {Badge, Card} from "antd";

const ServiceCard = ({service}) => {
    return(
        <Card
            title={
                <span>
                    {service?.title}
                    <Badge count={service?.watchedCount} style={{marginLeft: 8}}/>
                </span>
            }
            hoverable
            className={"service__item"}
        >
            <div  className={"service__img"}>
                <img src={`/images/${service?.image}`} alt={service?.title} />
                <h6>{service?.name}</h6>
                <p>{service?.description}</p>
                <p>{service?.price}</p>
            </div>
        </Card>
    )
}

export default ServiceCard;