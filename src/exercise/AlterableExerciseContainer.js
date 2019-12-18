
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { Text } from 'react';
import ExerciseContainer from './ExerciseContainer';

class AlterableExerciseContainer extends ExerciseContainer {

    constructor(props) {
        super(props);
        this.state = {
            sets: props.sets,
            exerciseName: props.exerciseName,
            repRange: props.repRange,
            value: props.value
        };
    }


    render() {
        return (<p>{this.state.exerciseName}</p>)
    }
}

export default ExerciseContainer;
