import React, { Component, Fragment } from "react"
import { Link } from "react-router-dom"
import gql from "graphql-tag"
import { Query } from "react-apollo"


const ShipsQuery = gql`
    query ShipsQuery {
        ships {
            ship_id
            ship_name
            ship_type
            year_built
        }
    }
`


class AllShip extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Fragment>
                <h3>All Ship Launches</h3>

                <Query query={ShipsQuery}>
                    {
                        ({ loading, error, data }) => {
                            if (loading) return <h4>Loading . . .</h4>
                            if (error) return <h4>Error</h4>

                            return (
                                <Fragment>
                                    {data.ships.map(ship => (
                                        <h3>Hihiih</h3>
                                    ))}
                                </Fragment>
                            )
                        }
                    }

                </Query>
            </Fragment>
        );
    }
}

{/* <Link to={"/"}>
    <button type="button" className="btn btn-primary"
        style={{ marginTop: "50px", marginBottom: "200px" }}>HOME</button>
</Link> */}


export default AllShip;