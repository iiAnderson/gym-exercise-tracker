import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { Text } from 'react';
import ExerciseContainer from '../exercise/ExerciseContainer'

import './WorkoutContainer.css';

class WorkoutContainer extends Component {


    constructor(props) {
        super(props);
        this.state = {
            workout: [{
                name: "Workout 1",
                exercises: [{
                    exerciseName: "Lat Pull Down",
                    sets: 2,
                    repRange: [12, 10],
                    value: [55, 60]
                },
                {
                    exerciseName: "Pullups",
                    sets: 3,
                    repRange: [12, 10],
                    value: [55, 60]
                }]
            }]
        };
    }

    generateExercises(exerciseList) {
        var exerciseContainers = []

        for (var exerciseKey in exerciseList) {
            var exercise = exerciseList[exerciseKey];

            exerciseContainers.push(<ExerciseContainer
                sets={exercise.sets}
                exerciseName={exercise.exerciseName}
                repRange={exercise.repRange}
                value={exercise.value}
            />);
        }

        return exerciseContainers;
    }

    computeWorkoutSets(exerciseList) {
        var tot = 0;

        for (var exerciseKey in exerciseList) {
            var exercise = exerciseList[exerciseKey];

            tot += exercise.sets;
        }

        return "No. Sets: " + tot
    }

    render() {
        return (
            <Container>
                <Accordion>
                    {
                        this.state.workout.map((row, index) => (
                            <Card key={index}>
                                <Card.Header>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        <div>
                                            <h3 id='accordion-header'>
                                                {row.name}
                                            </h3>
                                            <p id='accordion-text'>
                                                {this.computeWorkoutSets(row.exercises)}
                                            </p>
                                        </div>
                                    </Accordion.Toggle>

                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        {
                                            this.generateExercises(row.exercises)
                                        }
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        ))
                    }

                </Accordion>
            </Container>
        )
    }
}

export default WorkoutContainer;
