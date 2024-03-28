import {Row, Col, Input, DatePicker, Select, Button, Form} from 'antd';
import { SearchOutlined, CalendarOutlined } from '@ant-design/icons';
import '../../../../assets/style/SearchForm.css'; // Import custom CSS for styling

const { Option } = Select;

const TransportSearchForm = () => {
    return (
        <div className="transport-search-form">
            <h2 className="search-title">Transport xizmatlarimizni qidiring</h2>
            <Form className="search-form">
                <Row gutter={[16, 16]} justify="space-between">
                    <Col xs={24} md={5}>
                        <div className="form-group">
                            <label htmlFor="destination">Manzil</label>
                            <Input prefix={<SearchOutlined />} placeholder="Manzilni kiriting" />
                        </div>
                    </Col>
                    <Col xs={24} md={5}>
                        <div className="form-group">
                            <label htmlFor="checkin-date">Boshlanish vaqti</label>
                            <DatePicker className="date-picker" placeholder="Sanani tanlang" suffixIcon={<CalendarOutlined />} />
                        </div>
                    </Col>
                    <Col xs={24} md={5}>
                        <div className="form-group">
                            <label htmlFor="checkout-date">Tugash vaqti</label>
                            <DatePicker className="date-picker" placeholder="Sanani tanlang" suffixIcon={<CalendarOutlined />} />
                        </div>
                    </Col>
                    <Col xs={24} md={5}>
                        <div className="form-group">
                            <label htmlFor="price-limit">Narxi</label>
                            <Select className="price-select" defaultValue="$100">
                                <Option value="$100">$100</Option>
                                <Option value="$10,000">$10,000</Option>
                                <Option value="$50,000">$50,000</Option>
                                <Option value="$100,000">$100,000</Option>
                                <Option value="$200,000">$200,000</Option>
                                <Option value="$300,000">$300,000</Option>
                                <Option value="$400,000">$400,000</Option>
                                <Option value="$500,000">$500,000</Option>
                                <Option value="$600,000">$600,000</Option>
                                <Option value="$700,000">$700,000</Option>
                                <Option value="$800,000">$800,000</Option>
                                <Option value="$900,000">$900,000</Option>
                                <Option value="$1,000,000">$1,000,000</Option>
                                <Option value="$2,000,000">$2,000,000</Option>
                            </Select>
                        </div>
                    </Col>
                    <Col xs={24}>
                        <div className="form-group">
                            <Button type="primary" htmlType="submit" className="search-button">Qidirish</Button>
                        </div>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}

export default TransportSearchForm;
