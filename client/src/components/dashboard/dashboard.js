import React, {Component} from 'react';
import {connect} from 'react-redux';
import Composition from '../composition/composition.js';
import { Row, CardDeck } from 'reactstrap';
import './dashboard.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.chunkCompositions = this.chunkCompositions.bind(this);
    }

    chunkCompositions(comps, chunksize) {
        let chunkedComps = [];
        for(let i = 0; i < comps.length; i += chunksize) {
            chunkedComps.push(comps.slice(i, i + chunksize));
        }
        return chunkedComps;
    }

    render() {
        let chunks = this.chunkCompositions(this.props.compositions, 3);
        if(chunks.length > 0) {
            // return (
            //     <div>
            //     {chunks.map((chunk, idx) => {
            //         return (
            //             <Row key={idx}>
            //                 <CardDeck>
            //                     {chunk.map((composition) => {
            //                         return <Composition key={composition.name} composition={composition}></Composition>
            //                     })}
            //                 </CardDeck>
            //             </Row>
            //         );
            //     })}
            //     </div>
            // );

            let comps = this.props.compositions.map((composition) => {
                            return <div className="comp-container">
                                    <Composition key={composition.name} composition={composition}></Composition>
                                    </div>
                        });
            return (<div>{comps}</div>);
        } else {
            return <div>No Compositions111</div>;
        }
    }
}

function mapStateToProps(state, ownProps) {
    return {
        compositions: state.compositions
    };
}

export default connect(mapStateToProps, null)(Dashboard);



