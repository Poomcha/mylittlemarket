import './Home.css'

import Button from '../../components/Button/Button'

export default function Home() {

    return (
        <div className='home'>
            <h1 className='home__title'>mlm</h1>
            <p className='home__introduction'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis finibus mi ac leo facilisis dictum. Vivamus elementum turpis eget pretium accumsan. Cras pretium, odio et dapibus volutpat, felis felis sodales libero, auctor consequat risus quam id purus. Nullam eu sapien.
            </p>
            <nav className='home__nav'>
                <Button text={'Acheter'} path={'/buy'} />
                <Button text={'Vendre'} path={'/sell'} />
            </nav> 
        </div>
    )
}