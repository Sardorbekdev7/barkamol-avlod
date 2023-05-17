import { Button, Drawer, Menu, Radio, Select, Space } from 'antd';
import React, { useState } from 'react';
import Image from 'next/image';
import brand from '../../../public/navbar//brand.svg'
import Link from 'next/link';
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'

const handleChange = (value) => {
  console.log(`selected ${value}`);
};


const DrawerBarkamol = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('left');
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const items = [
    getItem(<p>Maktab</p>, 'sub1', <></>, [
      getItem(<Link href="/maktab/maktab-haqida/"><p>Maktab haqida</p></Link>, '1'),
      getItem(<Link href="/maktab/rahbariyat/"><p>Rahbariyat</p></Link>, '2'),
      getItem(<Link href="/maktab/maktab-tuzilmasi/"><p>Maktab tuzilmasi</p></Link>, '3'),
    ]),
    getItem(<p>Hujjatlar</p>, 'sub2', <></>, [
      getItem(<Link href="/hujjatlar/331-qaror/"><p>331-qaror</p></Link>),
      getItem(<Link href="/hujjatlar/4467-qaror/"><p>4467-qaror</p></Link>)
    ]),
    getItem(<Link href="/talim-yonalishlari/"><p>Ta{`'`}lim yo{`'`}nalishlari</p></Link>, 'sub3', <></>, [
      getItem(<Link href="/talim-yonalishlari/madaniyat-sanat/"><p>Madaniyat va san{`'`}at</p></Link>),
      getItem(<Link href="/talim-yonalishlari/texnika/"><p>Texnika konstruktorlik va modellashtirish</p></Link>),
      getItem(<Link href="/talim-yonalishlari/jismoniy-tarbiya/"><p>Jismoniy tarbiya va sport</p></Link>),
      getItem(<Link href="/talim-yonalishlari/hunarmandchilik/"><p>Hunarmandchilik va qo{`'`}l mehnati</p></Link>),
      getItem(<Link href="/talim-yonalishlari/ekologiya/"><p>Ekologiya va turizm</p></Link>),
      getItem(<Link href="/talim-yonalishlari/oliy-talim/"><p>Oliy ta{`'`}lim muassasalari va maktabga tayyorlov</p></Link>),
      getItem(<Link href="/talim-yonalishlari/xorijiy-tillar/"><p>Xorijiy tillar</p></Link>)
    ]),
    getItem(<p>Faoliyat</p>, 'sub4', <></>, [
      getItem(<Link href="/faoliyat/togarak-rahbarlari/"><p>To{`'`}garak boshliqlari</p></Link>),
      getItem(<Link href="/faoliyat/boshqa-xodimlar/"><p>Boshqa xodimlar</p></Link>)
    ]),
    getItem(<p>Axborot xizmati</p>, 'sub5', <></>, [
      getItem(<Link href="/axborot-xizmati/galereya/"><p>Galereya</p></Link>),
      getItem(<Link href="/axborot-xizmati/videogalereya/"><p>Videogaleya</p></Link>)
    ])
  ]
  return (
    <>
      <React.Fragment>
        <div>
          <GiHamburgerMenu type="primary" onClick={showDrawer} />
        </div>
        <Drawer
          title={<><AiOutlineClose style={{justifyContent: 'flex-end'}} type="primary" onClick={onClose} /></>}
          placement={placement}
          closable={false}
          onClose={onClose}
          open={open}
          key={placement}
          style={{paddingTop: '20px'}}
        >
          <Menu 
            style={{
              width: '100%',
              marginBottom: '10px'
            }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode='inline'
            items={items}
          />
        </Drawer>
      </React.Fragment>
    </>
  );
};
export default DrawerBarkamol;