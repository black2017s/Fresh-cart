import React from 'react'
import './MainSlider.css'

const MainSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
      };
  return (
    <>
    <div class="bg">
      <div className='d-flex justify-content-center align-items-center position-relative p-4'>
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
          width="100.000000pt" height="100.000000pt" viewBox="0 0 300.000000 300.000000"
          preserveAspectRatio="xMidYMid meet">
          <metadata>
          Created by potrace 1.10, written by Peter Selinger 2001-2011
          </metadata>
          <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
          fill="#006400" stroke="none">
          <path d="M650 2741 c-63 -20 -131 -74 -159 -127 -6 -12 -60 -200 -120 -418
          -117 -422 -134 -512 -111 -611 25 -109 93 -208 183 -265 l55 -35 4 -430 c3
          -392 5 -433 21 -463 26 -48 93 -109 135 -124 55 -19 1630 -19 1684 0 21 8 58
          33 82 58 75 75 76 80 76 548 l0 411 51 30 c93 54 163 152 189 264 25 105 10
          184 -110 606 -60 215 -118 407 -127 428 -9 21 -34 54 -56 72 -79 68 -43 65
          -951 64 -452 0 -832 -4 -846 -8z m1716 -55 c89 -41 95 -54 222 -494 113 -393
          114 -398 116 -507 1 -105 0 -113 -31 -176 -32 -64 -54 -89 -167 -182 l-46 -38
          0 -402 c0 -239 -4 -417 -10 -438 -16 -56 -51 -101 -100 -129 l-45 -25 -805 0
          -805 0 -45 25 c-24 14 -58 45 -75 68 l-30 44 -5 430 -5 430 -37 31 c-20 18
          -56 49 -81 69 -90 75 -134 190 -122 322 7 85 15 117 139 566 90 323 88 319
          132 364 64 66 41 65 939 65 l810 1 51 -24z"/>
          <path d="M924 2533 c-245 -4 -235 0 -265 -110 -30 -109 -56 -200 -89 -318 -65
          -228 -100 -380 -100 -427 0 -148 147 -251 269 -188 51 26 77 60 97 129 26 89
          31 99 64 116 58 30 130 -17 130 -85 0 -54 55 -136 112 -166 37 -19 116 -18
          158 4 49 24 96 91 105 148 9 61 29 90 69 104 66 21 98 -10 126 -121 14 -57 62
          -117 106 -135 44 -18 118 -18 153 1 43 22 100 93 107 134 13 79 25 102 61 118
          64 26 113 -10 128 -92 18 -103 82 -167 173 -172 71 -5 122 22 166 85 26 37 31
          54 34 115 3 62 -3 95 -43 232 -25 88 -62 216 -81 285 -72 256 -94 319 -113
          330 -20 10 -987 20 -1367 13z m1464 -403 c113 -397 127 -471 97 -534 -38 -79
          -134 -117 -209 -81 -50 24 -75 63 -88 137 -17 95 -71 139 -151 124 -53 -10
          -89 -55 -98 -123 -12 -90 -64 -143 -146 -150 -88 -8 -153 48 -168 144 -13 89
          -55 133 -125 133 -70 0 -112 -44 -125 -133 -15 -96 -80 -152 -168 -144 -82 7
          -134 60 -146 150 -9 68 -45 113 -98 123 -80 15 -134 -29 -151 -124 -13 -73
          -38 -113 -86 -136 -70 -33 -148 -9 -196 61 -47 69 -39 127 79 551 l104 372
          785 -2 785 -3 105 -365z"/>
          <path d="M883 1368 c-26 -17 -67 -39 -89 -49 -23 -9 -51 -28 -63 -40 -21 -22
          -21 -30 -21 -379 0 -368 4 -411 40 -430 25 -14 1475 -14 1500 0 35 19 39 62
          40 424 0 404 5 383 -93 430 -28 14 -70 36 -92 50 l-41 26 -34 -20 c-121 -71
          -162 -84 -250 -84 -95 1 -116 8 -212 66 l-68 40 -67 -40 c-97 -58 -118 -65
          -213 -65 -72 -1 -94 3 -143 26 -32 14 -70 35 -85 45 -46 32 -58 32 -109 0z
          m117 -50 c138 -94 331 -86 467 18 l33 25 33 -25 c138 -105 330 -112 470 -16
          l58 40 48 -33 c43 -30 72 -44 124 -61 16 -5 17 -32 17 -386 l0 -380 -750 0
          -750 0 0 380 c0 354 1 381 18 386 46 15 97 40 130 66 20 15 39 26 42 25 3 -1
          30 -19 60 -39z"/>
          <path d="M782 739 c24 -13 1418 -13 1432 1 7 7 -241 10 -719 10 -498 -1 -724
          -4 -713 -11z"/>
          </g>
          </svg>
      </div>
      <div className='d-flex justify-content-center align-items-center'>
        <div className="text-center" class="div">
          <button className='b-none bg-none' class="cta">
            <span class="hover-underline-animation"> Shop now </span>
              <svg
                  id="arrow-horizontal"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="10"
                  viewBox="0 0 46 16"
                >
                <path
                  id="Path_10"
                  data-name="Path 10"
                  d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                  transform="translate(30)"
                >
                </path>
                </svg>
            </button>
        </div>
      </div>
    </div>
    </>
    // <>
    //   <div className="row">
    //     <div className="col-lg-9 col-md-12 px-0">
    //       <div className="imageSlider">
    //         <Slider {...settings}>
    //            <img className='w-100'  height={345}  src={slide1} alt="" />       
    //            <img className='w-100' height={345} src={slide2} alt="" />       
    //         </Slider>
    //       </div>
    //     </div>
    //     <div className="col-lg-3 col-md-12 px-0">
    //       <img className='w-100' height={172.5} src={img1} alt="" />
    //       <img className='w-100' height={172.5} src={img2} alt="" />
    //     </div>
    //   </div>
    // </>
  )
}

export default MainSlider