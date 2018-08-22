import React from 'react';
import ReactPaginate from 'react-paginate';
import QueryBuilder from '../../utils/updateQuery';

export default class Pagination extends React.Component {

    handlePageChange = (pageNumber) => {
        let query = QueryBuilder(this.props.location.search, 'page', pageNumber.selected + 1)
        this.props.history.push(query);
        this.props.handlePageChange(this.props.userData, query);
    }

    render() {
        return (
            <ReactPaginate previousLabel={"previous"}
                            nextLabel={"next"}
                            breakLabel={<a href="">...</a>}
                            pageCount={this.props.totalPage() || 10}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={this.handlePageChange}
                            containerClassName={"pagination"}
                            activeClassName={"active"}
            />
        )
    }
}