import React, { useState } from 'react';
import Link from 'next/link';
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import { Drawer, Menu } from 'antd';

const DrawerBarkamol = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('left');
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
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
      getItem(<Link href="/hujjatlar/331-qaror/"><p>331-qaror</p></Link>, '1'),
      getItem(<Link href="/hujjatlar/4467-qaror/"><p>4467-qaror</p></Link>, '2')
    ]),
    getItem(<Link href="/talim-yonalishlari/"><p>Ta{`'`}lim yo{`'`}nalishlari</p></Link>, 'sub3', <></>, [
      getItem(<Link href="/talim-yonalishlari/madaniyat-sanat/"><p>Madaniyat va san{`'`}at</p></Link>, '1'),
      getItem(<Link href="/talim-yonalishlari/texnika/"><p>Texnika konstruktorlik va modellashtirish</p></Link>, '2'),
      getItem(<Link href="/talim-yonalishlari/jismoniy-tarbiya/"><p>Jismoniy tarbiya va sport</p></Link>, '3'),
      getItem(<Link href="/talim-yonalishlari/hunarmandchilik/"><p>Hunarmandchilik va qo{`'`}l mehnati</p></Link>, '4'),
      getItem(<Link href="/talim-yonalishlari/ekologiya/"><p>Ekologiya va turizm</p></Link>, '5'),
      getItem(<Link href="/talim-yonalishlari/oliy-talim/"><p>Oliy ta{`'`}lim muassasalari va maktabga tayyorlov</p></Link>, '6'),
      getItem(<Link href="/talim-yonalishlari/xorijiy-tillar/"><p>Xorijiy tillar</p></Link>, '7')
    ]),
    getItem(<p>Faoliyat</p>, 'sub4', <></>, [
      getItem(<Link href="/faoliyat/togarak-rahbarlari/"><p>To{`'`}garak boshliqlari</p></Link>, '1'),
      getItem(<Link href="/faoliyat/boshqa-xodimlar/"><p>Boshqa xodimlar</p></Link>, '2')
    ]),
    getItem(<p>Axborot xizmati</p>, 'sub5', <></>, [
      getItem(<Link href="/axborot-xizmati/galereya/"><p>Galereya</p></Link>, '1'),
      getItem(<Link href="/axborot-xizmati/videogalereya/"><p>Videogaleya</p></Link>, '2')
    ])
  ]
  return (
 
      <React.Fragment>
        <div>
          <div  onClick={showDrawer}>
            <GiHamburgerMenu />
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
              mode='inline'
              items={items}
            />
          </Drawer>
        </div>
      </React.Fragment>
  );
};
export default DrawerBarkamol;