import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
    return (
        <div>
            <div className="gpt3__header section__padding" id='home'>
                <div className="gpt3__header-content">
                    <h1 className="gradient__text">
                        Lets Build Something amazing with GPT-3 OpenAI
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque in nulla quas repudiandae incidunt tenetur nobis. Reiciendis fuga ab optio id cumque praesentium porro exercitationem ea magni nisi eos tempore, sed recusandae architecto quod animi voluptatibus quo? Aspernatur, fugit.</p>

                    <div className="gpt3__header-content__input">
                        <input type="email" placeholder="Your Email Address" />
                        <button type="button" className="" >Get Started</button>
                    </div>
                    <div className="gpt3__header-content__people">
                        <img src={people} alt="People" />
                        <p>1,600 people requested access a visit in last 24 Hours</p>
                    </div>
                </div>
                <div className="gpt3__header-image">
                    <img src={ai} alt="AI Image" />
                </div>
            </div>
        </div>
    )
}

export default Header
