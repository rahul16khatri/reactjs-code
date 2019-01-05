import React, {Component} from 'react'
import {Bar} from 'react-chartjs-2'

class Chart extends Component {

    constructor(props){
        super(props);
        this.state = {
            chartData : {
                labels: ['Boston', 'New york', 'sweden', 'Denmark'],
                datasets: [
                    {
                        label:'population',
                        data: [1000, 2000, 3000, 4000],
                        backgroundColor: 'rgba(255, 99, 132, 0.6)'
                    }
                ]

            }
        }
    }
    render() {
        return (
            <div className="chart">
                <Bar
                    data={this.state.chartData}
                    width={100}
                    height={50}
                    options={{legend:{
                        display: false
                    }}}           
                />
            </div>
        )
    }
}

export default Chart;