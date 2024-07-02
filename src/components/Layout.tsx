import React from 'react';
import { Layout, Menu, Switch } from 'antd';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import { faBottleDroplet, faBowlFood, faCandyCane, faCookieBite } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import en from '../locales/en';
import th from '../locales/th';

const { Header, Content, Footer } = Layout;

const CustomMenu = styled(Menu)`
  .ant-menu-item:hover,
  .ant-menu-item-selected {
    background-color: #D1AB85 !important;
    color: #fff !important;
  }

  .ant-menu-item::after,
  .ant-menu-item-selected::after {
    border-bottom: none !important;
  }
`;

const CustomSwitch = styled(Switch)`
  &.ant-switch-checked {
    background-color: #34B7C7 !important;
  }
  &.ant-switch:not(.ant-switch-checked) {
    background-color: #D1AB85 !important;
  }
`;

interface AppLayoutProps {
  children: React.ReactNode;
  showMenu?: boolean;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children, showMenu = true }) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'th' ? th : en;

  const handleLanguageChange = (checked: boolean) => {
    const newLocale = checked ? 'en' : 'th';
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  return (
    <Layout style={{ minHeight: '100vh', fontFamily: 'Kanit' }}>
      <Header style={{ backgroundColor: '#F0E0D0', display: 'flex', alignItems: 'center' }}>
        <Link href="/" passHref>
          <div style={{ flex: 1, color: '#3D2C1B', fontSize: '20px', fontWeight: '500', fontFamily: 'Kanit', textShadow: '1px 1px 2px #fff', cursor: 'pointer' }}>
            <span style={{ color: '#70D4E0', fontWeight: '500', textShadow: '1px 1px 2px #fff' }}>BLUE </span>Vending Machine
          </div>
        </Link>
        {showMenu && (
          <CustomMenu mode="horizontal" style={{ backgroundColor: '#F0E0D0', flex: 2, justifyContent: 'center' }}>
            <Menu.Item key="all">
              <Link href="/" style={{ color: '#3D2C1B', fontFamily: 'Kanit' }}>{t.all}</Link>
            </Menu.Item>
            <Menu.Item key="snacks">
              <Link href="/?category=snacks" style={{ color: '#3D2C1B', fontFamily: 'Kanit' }}><FontAwesomeIcon icon={faCookieBite} /> {t.snacks}</Link>
            </Menu.Item>
            <Menu.Item key="drinks">
              <Link href="/?category=drinks" style={{ color: '#3D2C1B', fontFamily: 'Kanit' }}><FontAwesomeIcon icon={faBottleDroplet} /> {t.drinks}</Link>
            </Menu.Item>
            <Menu.Item key="dry_food">
              <Link href="/?category=dry_food" style={{ color: '#3D2C1B', fontFamily: 'Kanit' }}><FontAwesomeIcon icon={faBowlFood} /> {t.dry_food}</Link>
            </Menu.Item>
            <Menu.Item key="candy">
              <Link href="/?category=candy" style={{ color: '#3D2C1B', fontFamily: 'Kanit' }}><FontAwesomeIcon icon={faCandyCane} /> {t.candy}</Link>
            </Menu.Item>
          </CustomMenu>
        )}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', color: '#000' }}>
          <span style={{ marginRight: '10px' }}>EN</span>
          <CustomSwitch defaultChecked={locale === 'en'} onChange={handleLanguageChange} />
          <span style={{ marginLeft: '10px' }}>TH</span>
        </div>
      </Header>
      <Content style={{ padding: '0 50px', background: '#fff' }}>
        <div style={{ padding: '24px', minHeight: '80vh' }}>{children}</div>
      </Content>
      <Footer style={{ textAlign: 'center', backgroundColor: '#D1AB85', color: '#fff' }}>
        © 2024 Punthisa Taengmang (SE Challenge)
      </Footer>
    </Layout>
  );
};

export default AppLayout;
