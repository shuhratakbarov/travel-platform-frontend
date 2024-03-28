import {Component} from "react";
import {Button, Form, Input} from "antd";
import {Link} from "react-router-dom";
import {GoogleOutlined, GithubOutlined, FacebookOutlined} from "@ant-design/icons";
import {OAUTH2_FACEBOOK, OAUTH2_GITHUB, OAUTH2_GOOGLE} from "../../utils/config";

class Login extends Component {
    handleLogin = (values) => {
        alert(values.toString());
    };

    render() {
        return (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <h2>Ro'yxatdan o'tish</h2>
                <div style={{ textAlign: "center" }}>
                    <Form name="login" onFinish={this.handleLogin} layout="vertical" noValidate={true} style={{ width: "70vh", textAlign: "center" }}>
                        <div style={{display:"flex", justifyContent:"space-around"}}>
                            <Form.Item label="Ism" name="firstName" rules={[{ required: true, message: 'Iltimos emailingizni kiriting!' }]} style={{textAlign:"center"}}>
                                <Input />
                            </Form.Item>
                            <Form.Item label="Familiya" name="lastName" rules={[{ required: true, message: 'Iltimos emailingizni kiriting!' }]}>
                                <Input />
                            </Form.Item>
                        </div>
                        <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Iltimos emailingizni kiriting!' }]}>
                            <Input />
                        </Form.Item>
                        <div style={{display:"flex", justifyContent:"space-around"}}>
                            <Form.Item label="Telefon raqam" name="phoneNumber" rules={[{ required: true, message: 'Iltimos raqamingizni kiriting!' }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Iltimos username kiriting!' }]}>
                                <Input autoComplete="off"/>
                            </Form.Item>
                        </div>
                        <Form.Item label="Parol" name="password" rules={[{ required: true, message: 'Iltimos parolingizni kiriting!'}]} style={{width:"70vh",display:"flex",flexDirection: "column", alignItems: "center"}} >
                            <Input.Password autoComplete="off"/>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">Tasdiqlash</Button>
                        </Form.Item>
                    </Form>
                </div>
                <h2>Yoki quyidagilar orqali ro'yxatdan o'ting</h2>
                <div style={{ display: "flex", paddingBottom:"3vh" }}>
                    <Button type={"link"}><Link to={OAUTH2_GOOGLE}><GoogleOutlined style={{ fontSize: "5vh" }} /></Link></Button>
                    <Button type={"link"}><Link to={OAUTH2_GITHUB}><GithubOutlined style={{ fontSize: "5vh" }} /></Link></Button>
                    <Button type={"link"}><Link to={OAUTH2_FACEBOOK}><FacebookOutlined style={{ fontSize: "5vh" }} /></Link></Button>
                </div>
            </div>
        );
    }
}

export default Login;