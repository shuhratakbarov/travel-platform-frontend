import { Breadcrumb, Layout } from 'antd';
import {Link, useLocation} from 'react-router-dom';
import Routers from "../../../../router/Routers";
import navigationData from "../../../../const/static/NavData";

const { Content } = Layout;

const AppContent = ({ colorBgContainer, borderRadiusLG }) => {
    const location = useLocation();

    const currentNavItem = navigationData.find(item => item.link === location.pathname);

    const breadcrumbItems = [
        <Breadcrumb.Item key="/">Bosh sahifa</Breadcrumb.Item>
    ];

    if (currentNavItem) {
        breadcrumbItems.push(
            <Breadcrumb.Item key={currentNavItem.key}>{currentNavItem.label}</Breadcrumb.Item>
        );
    }

    return (
        <Content
            style={{
                padding: 0,
                margin: 0,
            }}
        >
            <Breadcrumb
                style={{
                    padding: "10px",
                }}
            >
                {breadcrumbItems}
            </Breadcrumb>
            <div
                style={{
                    background: colorBgContainer,
                    minHeight: 280,
                    padding: 0,
                    borderRadius: borderRadiusLG,
                }}
            >
                <Routers />
            </div>
        </Content>
    );
};

export default AppContent;
