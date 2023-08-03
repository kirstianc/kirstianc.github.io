import React from 'react';
import ButtonList from '../components/ButtonList';
import projBlankImage from '../assets/images/gray.png'
import proj1Image from '../assets/images/fillboard.png'
import proj2Image from '../assets/images/ultra_jump_mania.png'

const Projects = () => {
    const projects = [
        {
            title: 'FillBoard',
            description: 'Online Party System for Real World benefits.',
            link: 'https://github.com/kirstianc/FillBoard',
            image: proj1Image,
        },
        {
            title: 'ULTRA JUMP MANIA',
            description: 'Simple 2D platformer created inside the Unity engine.',
            link: 'https://github.com/kirstianc/ultra-jump-mania',
            image: proj2Image,
        },
        {
            title: 'SJSU CS151 REPOSITORY',
            description: 'Object-oriented design course at SJSU.',
            link: 'https://github.com/kirstianc/SJSU_CS151_SPRING2021',
            image: projBlankImage,
        },
        {
            title: 'BASIC COUNTER',
            description: 'Counter with increment/decrement capabilities.',
            link: 'https://github.com/kirstianc/SIMPLE-COUNTER',
            image: projBlankImage,
        }
    ];

    return (
        <div>
            <title>My Projects</title>
            <h2>Project Links:</h2>
            <ButtonList projects={projects} />
        </div>
    );
};

export default Projects;
