import React, { useEffect } from 'react'
import style from './style/course.module.css'
import Link from 'next/link'
import OtherNews from '@/component/news/newspage/OtherNews'
import Links from '@/component/news/newspage/Links'
import { Button } from 'antd'
import { course } from '@/data/data'
import { useAuthStore } from '@/store/auth.store'
import { getData, getDataId, makeTitle, slugify } from '@/service/api.service'



const Course = () => {
  const { course, setCourse, course_id, setCourseId, coursewithid, setCoursewithid, path, setPath } = useAuthStore()
  
  const getId = () => {
    const len = location.pathname.split('/').length
    setCourseId(location.pathname.split('/')[len-1])
    setPath(location.pathname.split('/')[len-2])
    console.log(location.pathname);
  }

  const getCourse = () => {
    getDataId("courses", course_id).then(res => {
      setCoursewithid(res.data)
    })
  }
  
  const getCourses = () => {
    getData("courses").then(res => {
      setCourse(res.data)
    })
  }
  
  useEffect(() => {
    getId()
  }, [])
  
  useEffect(() => {
    getCourse()
    getCourses()
  }, [course_id]);

  // const changeCourse = ( course, id ) => {
  //   window.location.pathname = `/talim-yonalishlari/madaniyat-va-sanat/${course}`
    
  //   console.log();
  //   setCourseId(id)
  //   setPath(course)
  // }


  return (
      <div className={style.container}>
      <div className={style.newspages}>
        <div className={style.newspage}>
          <div>
            <p><Link href={'/'}>Axborot xizmati</Link> {`>`} <Link href={'/talim-yonalishlari/'}>Ma`daniyat va Sa`nat</Link>{` > `}<Link href={`/talim-yonalishlari//`}>{coursewithid.name_uz} to'garagi</Link></p> 
          </div>
          <h1>{coursewithid.name_uz}</h1>
          <img src={coursewithid.image} alt='' />
          <div className={style.newspagetext}>
            <p>
              {coursewithid.description_uz}
            </p>
          </div>
          <div className='back'>
            <Link href={'/'}>Ortga</Link>
          </div>

        </div>
        <div className={style.othernews}>
          <h2>Boshqa to’garaklar</h2>
          <div className={style.change_course}>
            {
              course.map((item, key) => 
                (
                  <Link key={key}  onClick={() => setCourseId(item.id)} href={`/talim-yonalishlari/${path}/${item.id}`}>
                    <Button>{item.name_uz}</Button>
                  </Link>
                )
              )
            }
          </div>
        </div>
      </div>
          <Links />
    </div>
  )
}

export default Course