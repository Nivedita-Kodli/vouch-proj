import React from 'react'
import Pagination from 'react-bootstrap/Pagination';

const Paginations = () => {
    return (
        <Pagination className='ms-3'>
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{48}</Pagination.Item>
            <Pagination.Item>{49}</Pagination.Item>
            <Pagination.Item>{50}</Pagination.Item>
        </Pagination>
    )
}

export default Paginations