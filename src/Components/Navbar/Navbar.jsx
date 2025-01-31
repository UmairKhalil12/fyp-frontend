import React, { useEffect, useState } from 'react';
import { Layout, Menu, Button, Avatar, Typography, Drawer } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { HomeOutlined, InfoCircleOutlined, UserOutlined, MenuOutlined, LogoutOutlined } from '@ant-design/icons';
import Logo from "../../assets/logo.png";
import './Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from "../../store/userSlice";
import { GET_METHOD } from '../../api/api';
import { userInfo } from '../../store/userSlice';

const { Header } = Layout;
const { Text } = Typography;

export default function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const userData = useSelector((state) => state.user.userData);
  const navigate = useNavigate();
  const [drawerVisible, setDrawerVisible] = useState(false);
  // const dispatch = useDispatch();

  const [usersInfo, setUsersInfo] = useState('');

  const auth = useSelector((state) => state.user.userData)

  const handleLogout = () => {
    dispatch(userLogout());
    navigate('/');
  };

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  useEffect(() => {
    const fetchUserInfo = async () => {
      const response = await GET_METHOD('/auth/me', userData);
      setUsersInfo(response);
      dispatch(userInfo(usersInfo));
    }
    fetchUserInfo();
  }, [userData])

  console.log(usersInfo, 'userInfo');

  return (
    <Header className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo-container">
          <img src={Logo} alt="Car Detection Logo" className="navbar-logo" />
          <span className="brand-name">Car Detection</span>
        </Link>
      </div>

      {/* Desktop Menu */}
      <Menu mode="horizontal" className="nav-menu" selectedKeys={[]}>
        <Menu.Item key="home" icon={<HomeOutlined />} className="nav-link">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="about" icon={<InfoCircleOutlined />} className="nav-link">
          <Link to="/about">About Us</Link>
        </Menu.Item>
        <Menu.Item key="upload" icon={<LogoutOutlined />} className="nav-link">
          <Link to="/upload">Upload Video</Link>
        </Menu.Item>
      </Menu>

      {/* Right Side (User Info and Logout) - Desktop */}
      <div className="navbar-right">
        <Avatar icon={<UserOutlined />} className="user-avatar" />
        <Text>{usersInfo.userName}</Text>
        <Button type="primary" className="login-btn" onClick={handleLogout}>Logout</Button>
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="mobile-menu-icon" onClick={toggleDrawer}>
        <MenuOutlined style={{ fontSize: '24px', color: '#4a4a4a', marginRight: '1rem' }} />
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={toggleDrawer}
        visible={drawerVisible}
        width={250}
        bodyStyle={{ padding: '0' }}
        className='mobile-drawer'
      >
        <Menu mode="vertical" className="mobile-nav-menu">
          <Menu.Item key="home" icon={<HomeOutlined />} className="nav-link">
            <Link to="/" onClick={toggleDrawer}>Home</Link>
          </Menu.Item>
          <Menu.Item key="about" icon={<InfoCircleOutlined />} className="nav-link">
            <Link to="/about" onClick={toggleDrawer}>About Us</Link>
          </Menu.Item>
          <Menu.Item key="upload" icon={<LogoutOutlined />} className="nav-link">
            <Link to="/upload" onClick={toggleDrawer}>Upload Video</Link>
          </Menu.Item>
          <Menu.Item key="profile" icon={<UserOutlined />} className="nav-link">
            <Link onClick={toggleDrawer}>{usersInfo.userName}</Link>
          </Menu.Item>
          <Menu.Item key="logout" icon={<LogoutOutlined />} className="nav-link" onClick={handleLogout}>
            Logout
          </Menu.Item>
        </Menu>
      </Drawer>
    </Header>
  );
}