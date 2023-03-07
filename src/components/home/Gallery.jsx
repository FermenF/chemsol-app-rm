import img1 from '../../assets/img-machines/1.png';
import img2 from '../../assets/img-machines/2.png';
import img3 from '../../assets/img-machines/3.png';
import img4 from '../../assets/img-machines/4.png';
import img5 from '../../assets/img-machines/5.png';
import img6 from '../../assets/img-machines/6.png';

import './styles/gallery.css';

export default function Gallery(){
    return(
        <section className="section services m-5" id="modo-galeria" data-aos="fade-right" data-aos-duration="500">
            <div className="gallery row no-gutters">
                <div className="col-xl-3 col-md-6 gallery-item">
                    <a href={ img1 } className="gallery-link" data-fancybox="gallery">
                        <div className="overlay border" style={{background: "transparent !important"}}></div>
                        <picture>
                            <source srcSet={ img1 } media="(min-width: 992px)" /><img className="img-bg" src={ img1 } alt="img" />
                        </picture>
                    </a>
                    <div className="description border border-primary"><span className="text-black">Lorem ipsum dolor</span></div>
                </div>
                <div className="col-xl-3 col-md-6 gallery-item">
                    <a className="gallery-link" href={ img2 } data-fancybox="main-gallery">
                        <div className="overlay border" style={{background: "transparent !important"}}></div>
                        <picture>
                            <source srcSet={ img2 } media="(min-width: 992px)" /><img className="img-bg" src={ img2 } alt="img" />
                        </picture>
                    </a>
                    <div className="description border border-primary"><span className="text-black">Lorem ipsum dolor</span></div>
                </div>
                <div className="col-xl-3 col-md-6 gallery-item">
                    <a className="gallery-link" href={ img3 } data-fancybox="main-gallery">
                        <div className="overlay border" style={{background: "transparent !important"}}></div>
                        <picture>
                            <source srcSet={ img3 } media="(min-width: 992px)" /><img className="img-bg" src={ img3 } alt="img" />
                        </picture>
                    </a>
                    <div className="description border border-primary"><span className="text-black">Lorem ipsum dolor</span></div>
                </div>
                <div className="col-xl-3 col-md-6 gallery-item">
                    <a className="gallery-link" href={ img4 } data-fancybox="main-gallery">
                        <div className="overlay border" style={{background: "transparent !important"}}></div>
                        <picture>
                            <source srcSet={ img4 } media="(min-width: 992px)" /><img className="img-bg" src={ img4 } alt="img" />
                        </picture>
                        <div className="description border border-primary"><span className="text-black">Lorem ipsum dolor</span></div>
                    </a>
                </div>
                <div className="col-xl-6 col-md-6 gallery-item">
                    <a className="gallery-link" href={ img5 } data-fancybox="main-gallery">
                        <div className="overlay border" style={{background: "transparent !important"}}></div>
                        <picture>
                            <source srcSet={ img5 } media="(min-width: 992px)" /><img className="img-bg" src={ img5 } alt="img" />
                        </picture>
                        <div className="description border border-primary"><span className="text-black">Lorem ipsum dolor</span></div>
                    </a>
                </div>
                <div className="col-xl-6 col-md-6 gallery-item">
                    <a className="gallery-link" href={ img6 } data-fancybox="main-gallery">
                        <div className="overlay border" style={{background: "transparent !important"}}></div>
                        <picture>
                            <source srcSet={ img6 } media="(min-width: 992px)" /><img className="img-bg" src={ img6 } alt="img" />
                        </picture>
                    </a>
                    <div className="description border border-primary"><span className="text-black">Lorem ipsum dolor</span></div>
                </div>
            </div>
        </section>
    )
}