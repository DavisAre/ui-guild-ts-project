import React from 'react'
import { Item } from '../services/types'
import { ResultItem } from "./ResultItem";

import { Row } from "react-bootstrap"

type Props = {
    items: Item[]
}

export const ResultFeed = ({ items }: Props) => {

    return (
        <Row>
            {items.map((item) => {
                return <ResultItem data={item} key={item.timestamp}/>
            })}
        </Row>
    )
}
