import React from 'react'
import { Card, Button, Col } from "react-bootstrap";
import { Item } from '../services/types';

type Props = {
    data: Item
}

export const ResultItem = ({ data }: Props) => {
    const { title, timestamp, edmIsShownBy, edmPreview } = data;
    return (
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={edmPreview[0]} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {new Date(timestamp).toLocaleDateString("en-US")}
                    </Card.Text>
                    <Button variant="primary" onClick={() => window.open(edmIsShownBy[0], "_blank")}>Expand</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}
