import React from 'react'
import ServiceCard from './ServiceCard'
import {Col, Row} from 'antd'

const ServiceList = ({servicesData}) => {

    const colsPerRow = 3;
    const renderCards = () => {
        const rows = [];
        for (let i = 0; i < servicesData.length; i += colsPerRow) {
            const cols = servicesData.slice(i, i + colsPerRow).map((service, index) => (
                <Col span={24 / colsPerRow} key={index}>
                    <ServiceCard service={service} />
                </Col>
            ));
            rows.push(
                <Row gutter={[50, 16]} key={i} style={{marginBottom: "3vh"}}>
                    {cols}
                </Row>
            );
        }
        return rows;
    };

    return (
        renderCards()
    );
}

export default ServiceList;