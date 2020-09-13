import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
            sections: [{
                  title: 'action',
                  imageUrl: 'https://www.nme.com/wp-content/uploads/2020/05/star-wars-jed-fallen-order-credit-ea@2000x1270-696x442.jpg',
                  id: 1,
                  linkUrl: 'shop/actions'
                },
                {
                  title: 'rpg',
                  imageUrl: 'https://cdn.images.express.co.uk/img/dynamic/143/590x/Final-Fantasy-7-Remake-1277033.webp?r=1588583410924',
                  id: 2,
                  linkUrl: 'shop/RPG'
                },
                {
                  title: 'shooter',
                  imageUrl: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F07%2Fcall-of-duty-black-ops-cold-war-doritos-promo-leak-logo-release-info-001.jpg?q=90&w=1400&cbr=1&fit=max',
                  id: 3,
                  linkUrl: 'shop/shooter'
                },
                {
                  title: 'sports',
                  imageUrl: 'https://www.androidcentral.com/sites/androidcentral.com/files/styles/w830/public/article_images/2020/09/2k21-3.jpg',
                  id: 4,
                  size: 'large',
                  linkUrl: 'shop/sports'
                },
                {
                  title: 'racing',
                  imageUrl: 'https://cdn.ndtv.com/tech/gadgets/gt_sport_ps4_.jpg?output-quality=80&output-format=webp',
                  id: 5,
                  size: 'large',
                  linkUrl: 'shop/racing'
                },
                {
                  title: 'adventure',
                  imageUrl: 'https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2020/04/AC-Valhalla-796x417.jpg',
                  id: 6,
                  size: 'large',
                  linkUrl: 'shop/adventure'
                }]
        }
    }

    render() {
        return (
            <div className = 'directory-menu'>
                {this.state.sections.map(({title, imageUrl, id, size}) => (
                    <MenuItem key = {id} title={title} imageUrl = {imageUrl} size={size}/>
                ))}
            </div>
        );
    }
}

export default Directory;