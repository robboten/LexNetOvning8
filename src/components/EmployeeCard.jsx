import React from "react";
import { Card, Button } from 'react-bootstrap';
import { LoremIpsum, fullname, Avatar } from 'react-lorem-ipsum';

export function EmployeeCard({ data }) {
    return (
        <Card className="h-100 border-white" key={data.id}>
            <Avatar gender={data.gender} className="align-self-center avatar rounded-circle my-4" width="200" height="200" alt="Avatar" />
            <Card.Body className="d-flex flex-column text-center">
                <Card.Title className="mb-0 font-weight-bold"><h4>{fullname(data.gender)}</h4></Card.Title>
                <Card.Subtitle><h5 className="text-muted text-center">{data.role}</h5></Card.Subtitle>
                <Card.Text className="text-muted"><LoremIpsum p={1} avgSentencesPerParagraph={3} /></Card.Text>
                <Button className='mt-auto mx-4' href="mailto:foo@bar.baz">
                    Mail me!
                </Button>
            </Card.Body>
        </Card>
    )
}

