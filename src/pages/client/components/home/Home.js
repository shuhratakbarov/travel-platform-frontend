import {Component, Fragment} from "react";
import {Button, Card, Col, Form, Input, Row} from "antd";
import ServiceList from "../../../../services/ServiceList";

class Home extends Component {
    tourPackages = [
        { title: 'Paris Tour', description: 'Explore the City of Love', price: '$1000', image: 'tour-img01.jpg' },
        { title: 'Tokyo Adventure', description: 'Discover the Bustling Streets of Tokyo', price: '$1200', image: 'tour-img01.jpg' },
        { title: 'Safari in Africa', description: 'Experience the Wild in Africa', price: '$1500', image: 'tour-img01.jpg' },
    ];

    mostViewedDestinations = [
        { title: 'New York City',description: 'Explore the City of Love', image: 'tour-img01.jpg' },
        { title: 'London',description: 'Explore the City of Love', image: 'tour-img01.jpg' },
        { title: 'Sydney',description: 'Explore the City of Love', image: 'tour-img01.jpg' },
    ];
    render() {
        return (
            <Fragment style={{ padding: '0 50px', minHeight: 'calc(100vh - 64px)' }}>
                <div className="site-layout-content" style={{textAlign:"center"}}>
                    <h1>Welcome to our Travel Website!</h1>
                    <p>Discover amazing destinations around the world.</p>

                    <h2>Tour Packages</h2>
                    {/*<Row gutter={16}>*/}
                    {/*    {this.tourPackages.map((packageItem, index) => (*/}
                    {/*        <Col span={8} key={index}>*/}
                    {/*            <Card*/}
                    {/*                hoverable*/}
                    {/*                style={{ marginBottom: '20px' }}*/}
                    {/*                cover={<img alt={packageItem.title} src={`/images/${packageItem.image}`} />}*/}
                    {/*            >*/}
                    {/*                <Card.Meta title={packageItem.title} description={packageItem.description} />*/}
                    {/*                <div style={{ marginTop: '10px', fontWeight: 'bold' }}>{packageItem.price}</div>*/}
                    {/*            </Card>*/}
                    {/*        </Col>*/}
                    {/*    ))}*/}
                    {/*</Row>*/}
                    <ServiceList servicesData={this.tourPackages} />

                    <h2>Most Viewed Destinations</h2>
                    {/*<Row gutter={16}>*/}
                    {/*    {this.mostViewedDestinations.map((destination, index) => (*/}
                    {/*        <Col span={8} key={index}>*/}
                    {/*            <Card*/}
                    {/*                hoverable*/}
                    {/*                style={{ marginBottom: '20px' }}*/}
                    {/*                cover={<img alt={destination.title} src={`/images/${destination.image}`} />}*/}
                    {/*            >*/}
                    {/*                <Card.Meta title={destination.title} />*/}
                    {/*            </Card>*/}
                    {/*        </Col>*/}
                    {/*    ))}*/}
                    {/*</Row>*/}
                    <ServiceList servicesData={this.mostViewedDestinations} />
                </div>
        </Fragment>
        );
    }
}

export default Home;