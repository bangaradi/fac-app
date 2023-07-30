import React, { useState } from 'react';
import logo from '../logo.svg';
import useDarkMode from '../hooks/useDarkMode';
import useDirection from '../hooks/useDirection';
import { Link, useNavigate } from 'react-router-dom';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/joy';

export default function Dashboard(props: {
  children: React.ReactNode;
}) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { t } = useTranslation();
  const sidebarItems = [
    // Sidebar items configuration (same as in your original code)
  ];

  const [currentIndex, setCurrentIndex] = useState(-1);

  const { toggleDark } = useDarkMode();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('AuthToken');
    navigate('/');
  };

  function changeLang(lang: string) {
    i18n.changeLanguage(lang);
    document.body.dir = i18n.dir();
  }

  return (
    <div className="h-full">
      <div className="flex flex-col w-full overflow-x-hidden text-slate-700 dark:text-slate-50 bg-gray-50 dark:bg-primary-800">
        <aside
          className={`${
            sidebarCollapsed ? 'md:w-16' : 'md:w-64'
          } dark:bg-primary-700 transition-width duration-700 w-full top-0 md:fixed bottom-0 z-30 flex-shrink-0   overflow-y-auto  lg:block`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-center h-16 text-5xl bg-primary-900">
              <img className="w-auto h-16" src={logo} alt="logo" />
              <Link to="/" className="i-carbon-flash-filled text-sky-400"></Link>
            </div>
            <div className="mt-5">
              <nav className="flex-1 mt-5 text-xs font-medium leading-5 md:text-sm">
                <ul className="m-0 ml-0 list-none">
                  {sidebarItems.map((item, index) => (
                    <li
                      key={item.title}
                      className={` ${
                        currentIndex === index ? 'bg-primary-600' : ''
                      }`}
                    >
                      <Link
                        onClick={() => setCurrentIndex(index === currentIndex ? -1 : index)}
                        className={`${
                          sidebarCollapsed ? 'justify-center' : ''
                        } sidebar-item block py-4 px-4 flex items-center rtl:space-x-reverse space-x-2 text-white decoration-none leading-5 group hover:bg-primary-600 focus:outline-none transition duration-150 ease-in-out`}
                        to={item.path}
                      >
                        <span className={`${item.icon} text-lg block`}></span>
                        {!sidebarCollapsed && <span className="block">{item.title}</span>}
                        {!sidebarCollapsed && item.children && (
                          <span className="i-carbon-chevron-down">{item.title}</span>
                        )}
                      </Link>
                      {item.children && !sidebarCollapsed && currentIndex === index && (
                        <ul className="ml-4 opacity-75">
                          {item.children.map((child) => (
                            <li key={child.title}>
                              <Link
                                className="block py-1 text-xs px-4 flex items-center rtl:space-x-reverse space-x-2 text-white decoration-none leading-5 group hover:text-slate-100 dark-hover:text-slate-100 focus:outline-none focus:font-bold transition duration-150 ease-in-out"
                                to={child.path}
                              >
                                <span className="i-carbon-software-resource"></span>
                                {!sidebarCollapsed && <span>{child.title}</span>}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </aside>
        <div
          className={`w-full relative transition-padding duration-700 pl-0 ${
            sidebarCollapsed ? 'md:pl-16 rtl:pl-0 md:rtl:pr-16' : 'rtl:pl-0 md:rtl:pr-64 md:pl-64'
          }`}
        >
          <header
            className={`${
              sidebarCollapsed ? 'md:pl-20 md:rtl:pr-20' : 'pl-0 rtl:pl-2 md:rtl:pr-40 md:rtl:pr-72 md:pl-72'
            } pr-0 pl-2 transition-padding duration-700 w-full md:fixed right-0 z-20 flex flex-col items-center justify-center md:justify-between px-4 py-2 space-y-2 shadow-md md:py-0 md:space-y-none md:h-16 md:flex-row bg-slate-100 dark:bg-primary-900`}
          >
            <div className="hidden md:block">
              {/* ... (toggle button for sidebar collapse) ... */}
            </div>
            {/* ... (search input and other elements) ... */}
            <div className="flex items-center space-x-4 rtl:space-x-reverse text-slate-600 dark:text-white">
              {/* ... (language change and user avatar elements) ... */}
              <Button onClick={handleLogout}>Log Out</Button>
            </div>
          </header>
          <main className="w-full pt-16 text-slate-600 dark:text-slate-50">{props.children}</main>
        </div>
      </div>
    </div>
  );
}
