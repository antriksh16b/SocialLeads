import React from 'react'
import Logo from '../../logo.png'

function Header() {
    const navItems=[
        {name:'Home',link:'/',status:true},
        {name:'About',link:'/about',status:true},
        {name:'Services',link:'/services',status:true},
        {name:'Portfolio',link:'/portfolio',status:true},
        {name:'Contact',link:'/contact',status:true},
    ]
  return (
    <header>
        <nav className='flex flex-wrap p-3 shadow-lg bg-black'>
            <div>
                <img src={Logo} alt="" className='h-16'/>
            </div>
                <ul className='flex ml-auto items-center justify-center'>
                    {navItems.map((item)=>(
                        item.status && <li key={item.name} className={`inline-block px-6 py-2 duration-500 hover:bg-purple-400 rounded-full`}>{item.name}</li>
                    ))}
                </ul>
        </nav>
    </header>
  )
}

export default Header