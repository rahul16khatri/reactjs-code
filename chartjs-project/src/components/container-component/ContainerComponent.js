import React, {Component} from 'react'
import Header from '../layout/Header'
import Sidebar from '../layout/Sidebar'
import Chart from '../chart/Chart'

class ContainerComponent extends Component {
    constructor(props) {
        super(props);
    }

    render (){
        return (
            <div className="main-container">
                <Header />
                <Sidebar />
                <div className="main">
                 <form className="form-style">

                    <div className="form-dropdown-element">
                        <span className="pull-up">START DATE</span><br/>
                        <input type="date" />
                    </div>

                    <div className="form-dropdown-element">
                        <span className="pull-up">END DATE</span><br/>
                        <input type="date" />
                    </div>

                    <div className="form-dropdown-element">
                        <span className="pull-up">PRODUCT FAMILY</span><br/>
                        <select className="bg-color">
                            <option value="">All</option>
                            <option value="value1">Large Reaction</option>
                            <option value="value2">Med Reaction</option>
                            <option value="value3">Small Reaction</option>
                            <option value="value4">XL Reaction</option>
                        </select>
                    </div>

                    <div className="form-dropdown-element">
                        <span className="pull-up">PRODUCT CODE</span><br/>
                        <select className="bg-color">
                            <option value="">All</option>
                            <option value="value1">ARL</option>
                            <option value="value2">ARM</option>
                            <option value="value3">ARS</option>
                            <option value="value4">ARX</option>
                        </select>
                    </div>
                    <button className="apply">Apply</button> &nbsp;
                    <button className="reset">Reset</button>

                    <div className="search-container">
                        <input className="right-align search" placeholder="search" type="text" />
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </div>

                 </form>

                 <Chart />

                </div>
            </div>
        )
    }
}

export default ContainerComponent;