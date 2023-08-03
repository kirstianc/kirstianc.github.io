import React from 'react';
import ButtonList from '../components/ButtonList';
import projBlankImage from '../assets/images/gray.png';

/* DynamicWiki.js is a wikipedia that changes information based on the user's current episode.
* Referencing Akash Joshi's article about Wikipedia Apps using React Hooks and Auth0
* https://auth0.com/blog/building-a-wikipedia-app-using-react-hooks-and-auth0/
*/

function DynamicWiki() {
    const items = [
        {
            title: 'The Sopranos',
            description: 'A mafia drama.',
            link: '/DynamicWiki/TheSopranos',
            image: projBlankImage,
        },
        {
            title: 'Jujutsu Kaisen',
            description: 'A demon hunting anime.',
            link: '/DynamicWiki/JujutsuKaisen',
            image: projBlankImage,
        },
        {
            title: 'One Piece',
            description: 'A pirate adventure anime.',
            link: '/DynamicWiki/OnePiece',
            image: projBlankImage,
        }
    ];

    return (
        <div>
            <h1>DynamicWiki!</h1>
            <p>
                This is a wiki that changes information based on what episode you are on. This prevents spoilers and other information from ruining YOUR experience!
            </p>
            <br />
            <ButtonList items={items} />
        </div>
    );
}

export default DynamicWiki;
