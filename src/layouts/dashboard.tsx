//dashboard component
import React, { useState, useEffect } from 'react';
import logo from '../logo.svg'
import useDarkMode from '../hooks/useDarkMode';
import useDirection from '../hooks/useDirection';
import { Link, useNavigate } from 'react-router-dom';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/joy';


export default function Dashboard(props: {
    children: React.ReactNode
}) {

    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const { t } = useTranslation()
    

    const [currentIndex, setCurrentIndex] = useState(-1);



    const { toggleDark } = useDarkMode()
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('AuthToken')
        navigate('/')
    } 

    function changeLang(lang: string) {
        i18n.changeLanguage(lang)
        document.body.dir=i18n.dir()
    }

    return <div className='h-full'>

        <div className='flex flex-col w-full overflow-x-hidden text-slate-700 dark:text-slate-50 bg-gray-50 dark:bg-primary-800' >
            
            <div className={`w-full  relative transition-padding duration-700 pl-0 'md:pl-16 rtl:pl-0 md:rtl:pr-16'`}>
                <header className={`'md:pl-20 md:rtl:pr-20' pr-0 pl-2 transition-padding duration-700 w-full md:fixed right-0 z-20 flex flex-col items-center justify-center md:justify-between  px-4 py-2 space-y-2 shadow-md  md:py-0 md:space-y-none md:h-16 md:flex-row bg-slate-100 dark:bg-primary-900`}>
                    <div className="hidden md:block">
                        {/* <button
                            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                            className="text-xl cursor-pointer fill-current i-carbon-menu text-slate-600 dark:text-white hover:bg-slate-500" /> */}

                    </div>
                    {/* <div>
                        <div className="relative"><span className="absolute inset-y-0 z-10 flex items-center pl-3 text-xl text-gray-500 i-carbon-search top-1/4 left-3">
                        </span>
                            <input type="text" placeholder="Type Something" className="w-full min-w-[300px] py-3 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-primary-900 dark:text-gray-300 dark:border-gray-500 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                    </div> */}
                    <div className='flex items-center space-x-4 rtl:space-x-reverse text-slate-600 dark:text-white'>
                        {/* <button onClick={toggleDark} className="text-xl cursor-pointer i-carbon-sun dark:i-carbon-moon hover:bg-slate-500 text-slate-600 dark:text-white" /> */}
                        {/* <div className='flex h-8 bg-primary-700'>
                            <button onClick={() => changeLang('en')} className={`${i18n.language === "en" ? 'bg-primary-600' : 'bg-transparent'} w-8 cursor-pointer outline-none border-0 text-white`}>
                                En
                            </button>
                            <button onClick={() => changeLang('ar')} className={`${i18n.language === "ar" ? 'bg-primary-600' : 'bg-transparent'} w-8 cursor-pointer  outline-none border-0 text-white`}>
                                ع
                            </button>
                        </div> */}

                        {/* <button className="text-xl cursor-pointer i-carbon-notification hover:bg-slate-500 text-slate-600 dark:text-white" /> */}
                        {/* avatar */}
                        <div className="flex items-center cursor-pointer">
                            {/* <img className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" /> */}
                            <Button onClick={handleLogout}>Log Out</Button>
                        </div>
                    </div>

                </header>
                <main className="w-full pt-16 text-slate-600 dark:text-slate-50 ">
                    {props.children}
                </main>
            </div>
        </div >

    </div >
}

