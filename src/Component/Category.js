import React from 'react'
import { Link } from 'react-router-dom';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Category() {
    //const navigate = useNavigate();
    // const data = [{ name: 'Animation' }, { name: 'Business' }, { name: "Pets&Animals" }, { name: 'Sports' }, { name: 'Travel&Events', }, { name: 'Motivation', }, { name: 'People&Blogs', }, { name: 'AdvancedMedicine', }, { name: 'DigitalMarketing', }, { name: 'News&Politics' },]
    let displayWidth = window.screen.width;
    var showCategory = 11;
    if (displayWidth > 770 && displayWidth < 1200) {
        showCategory = 5
    }
    else if (displayWidth < 770 && displayWidth > 550) {
        showCategory = 3
    }
    else if (displayWidth < 550) {
        showCategory = 2
    }
    // function handleNavigate(Category){
    //     navigate('/allvideos',{Category:Category})
    //     console.log(Category)
    // }
    return (
        <div className='pt_sec_nav_cats'>
            <div className="categoryContainer container-fluid" >
                <Swiper className='' Style="width:100%;margin-left: 0rem;padding-left: 2rem;z-index: 1;"
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={0}
                    slidesPerView={showCategory}
                    navigation
                    onSlideChange={() => console.log('slide change')}
                >
                    {/* {data.map((element) => {
                            ""
                            return <SwiperSlide className='allSwiper' Style="width:1rem"><span className="swiper-slide-btn" Style="cursor:pointer;" key={element.name} ><Link to={`/home2/allvideos/${element.name}`}>{element.name}</Link></span></SwiperSlide>
                        })} */}
                    <SwiperSlide className='allSwiper swiper-fixed-width' Style="width:1rem"><span className="swiper-slide " role="group" aria-label="2 / 15"><Link className="swiper-slide-btn swiper-slide-btn-active" to="/home2/allvideos/1" >All</Link></span></SwiperSlide>
                    <SwiperSlide className='allSwiper swiper-fixed-width' Style="width:1rem"><span className="swiper-slide " role="group" aria-label="2 / 15"><Link className="swiper-slide-btn" to="/home2/allvideos/1" >Film&nbsp;&&nbsp;Animation</Link></span></SwiperSlide>
                    <SwiperSlide className='allSwiper' Style="width:1rem"><span className="swiper-slide" role="group" aria-label="3 / 15"><Link className="swiper-slide-btn" to="/home2/allvideos/3" data-load="?link1=videos&amp;page=category&amp;id=3">Business</Link></span></SwiperSlide>
                    <SwiperSlide className='allSwiper' Style="width:1rem"><span className="swiper-slide " role="group" aria-label="4 / 15"><Link className="swiper-slide-btn" to="/home2/allvideos/4" data-load="?link1=videos&amp;page=category&amp;id=4">Pets&nbsp;&&nbsp;Animals</Link></span></SwiperSlide>
                    <SwiperSlide className='allSwiper' Style="width:1rem"><span className="swiper-slide " role="group" aria-label="5 / 15"><Link className="swiper-slide-btn" to="/home2/allvideos/5" data-load="?link1=videos&amp;page=category&amp;id=5">Sports</Link></span></SwiperSlide>
                    <SwiperSlide className='allSwiper' Style="width:1rem"><span className="swiper-slide " role="group" aria-label="6 / 15"><Link className="swiper-slide-btn" to="/home2/allvideos/6" data-load="?link1=videos&amp;page=category&amp;id=6">Travel&nbsp;&&nbsp;Events</Link></span></SwiperSlide>
                    <SwiperSlide className='allSwiper' Style="width:1rem"><span className="swiper-slide " role="group" aria-label="7 / 15"><Link className="swiper-slide-btn" to="/home2/allvideos/7" data-load="?link1=videos&amp;page=category&amp;id=7">Motivation</Link></span></SwiperSlide>
                    <SwiperSlide className='allSwiper' Style="width:1rem"><span className="swiper-slide " role="group" aria-label="8 / 15"><Link className="swiper-slide-btn" to="/home2/allvideos/8" data-load="?link1=videos&amp;page=category&amp;id=8">People&nbsp;&&nbsp;Blogs</Link></span></SwiperSlide>
                    <SwiperSlide className='allSwiper' Style="width:1rem"><span className="swiper-slide " role="group" aria-label="9 / 15"><Link className="swiper-slide-btn" to="/home2/allvideos/9" data-load="?link1=videos&amp;page=category&amp;id=9">Advanced&nbsp;Medicine</Link></span></SwiperSlide>
                    <SwiperSlide className='allSwiper' Style="width:1rem"><span className="swiper-slide " role="group" aria-label="10 / 15"><Link className="swiper-slide-btn" to="/home2/allvideos/10" data-load="?link1=videos&amp;page=category&amp;id=10">Digital&nbsp;Marketing</Link></span></SwiperSlide>
                    <SwiperSlide className='allSwiper' Style="width:1rem"><span className="swiper-slide " role="group" aria-label="11 / 15"><Link className="swiper-slide-btn" to="/home2/allvideos/11" data-load="?link1=videos&amp;page=category&amp;id=11">News&nbsp;&&nbsp;Politics</Link></span></SwiperSlide>
                    <SwiperSlide className='allSwiper' Style="width:1rem"><span className="swiper-slide " role="group" aria-label="12 / 15"><Link className="swiper-slide-btn" to="/home2/allvideos/12" data-load="?link1=videos&amp;page=category&amp;id=12">How&#8209;to&nbsp;&&nbsp;Style</Link></span></SwiperSlide>
                    <SwiperSlide className='allSwiper' Style="width:1rem"><span className="swiper-slide " role="group" aria-label="13 / 15"><Link className="swiper-slide-btn" to="/home2/allvideos/13" data-load="?link1=videos&amp;page=category&amp;id=13">Non&#8209;profits&nbsp;&&nbsp;Activism</Link></span></SwiperSlide>
                    <SwiperSlide className='allSwiper' Style="width:1rem"><span className="swiper-slide " role="group" aria-label="14 / 15"><Link className="swiper-slide-btn" to="/home2/allvideos/849" data-load="?link1=videos&amp;page=category&amp;id=849">Super&nbsp;Cars</Link></span></SwiperSlide>
                    <SwiperSlide className='allSwiper' Style="width:1rem"><span className="swiper-slide " role="group" aria-label="15 / 15"><Link className="swiper-slide-btn" to="/home2/allvideos/other" data-load="?link1=videos&amp;page=category&amp;id=other">Other</Link></span></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Category