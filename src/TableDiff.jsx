import React from 'react';

import _ from 'lodash';
import Table from 'react-bootstrap/lib/Table';
import './resources/_layout.css'

class TableDiff extends React.Component {



    static defaultProps = {
        enabled: false,
        tableLHS: {},
        graphLHS: {},
        graphRHS: {}
    };


    render() {
        let {tableLHS, tableRHS, title} = this.props;

        let diffStates = {
            RETRACTED: 'retracted',
            ADDED: 'added',
            UNMODIFIED: 'unmodified',
            MODIFIED: 'modified'
        }


        //Consolidate table entries
        function customizer(LHSValue, RHSValue) {
            if(!_.isEqual(LHSValue, RHSValue)){
                if (_.isArray(LHSValue)) {
                    return LHSValue.concat(RHSValue);
                } else {
                    let combinedValue = [LHSValue];
                    return combinedValue.concat(RHSValue);
                }
            } else {
                return [LHSValue];
            }

        }
        _.mergeWith(tableLHS, tableRHS, customizer);


        //Calculate the diff between entries
        let consolidatedTable = {};
        Object.keys(tableLHS).forEach(key => {
            if(!_.isArray(tableLHS[key])){
                consolidatedTable[key] = {
                    type: diffStates.RETRACTED,
                    'LHSValue': tableLHS[key],
                    'RHSValue': ''
                };
            } else if(tableLHS[key].length === 2){
                if(typeof tableLHS[key][0] === 'undefined'){
                    consolidatedTable[key] = {
                        type: diffStates.ADDED,
                        'LHSValue': '',
                        'RHSValue': tableLHS[key][1]
                    };
                } else {
                    consolidatedTable[key] = {
                        type: diffStates.MODIFIED,
                        'LHSValue': tableLHS[key][0],
                        'RHSValue': tableLHS[key][1]
                    };
                }
            } else if(tableLHS[key].length === 1){
                consolidatedTable[key] = {
                    type: diffStates.UNMODIFIED,
                    'LHSValue': tableLHS[key][0],
                    'RHSValue': tableLHS[key][0]
                };
            }
        });

        function addTableColumn(arrayName, className, value) {
            arrayName.push(
                <th className={className} key={Math.random()}>
                    {value}
                </th>);
        }

        //Table columns
        let tableColumns = [];
        addTableColumn(tableColumns, 'left-column-cell', 'Attribute');
        addTableColumn(tableColumns, 'right-column-cell', 'Old');
        addTableColumn(tableColumns, 'right-column-cell', 'new');


        //Add table rows
        let tableRows = [];

        Object.keys(consolidatedTable).forEach(key => {
            let LHSRowClassName = '';
            let RHSRowClassName = '';

            switch (consolidatedTable[key].type) {
                case diffStates.UNMODIFIED:
                    LHSRowClassName = 'right-column-cell';
                    RHSRowClassName = 'right-column-cell';
                    break;
                case diffStates.MODIFIED:
                    LHSRowClassName = 'history-table-modified';
                    RHSRowClassName = 'history-table-modified';
                    break;
                case diffStates.ADDED:
                    LHSRowClassName = 'right-column-cell';
                    RHSRowClassName = 'history-table-added';
                    break;
                case diffStates.RETRACTED:
                    LHSRowClassName = 'history-table-removed';
                    RHSRowClassName = 'right-column-cell';
                    break;
                default:
                    LHSRowClassName = 'right-column-cell';
                    RHSRowClassName = 'right-column-cell';
            }
            tableRows.push(
                <tr key={Math.random()}>
                    <td className='left-column-cell'>{key}</td>
                    <td className={LHSRowClassName}>{consolidatedTable[key].LHSValue}</td>
                    <td className={RHSRowClassName}>{consolidatedTable[key].RHSValue}</td>
                </tr>
            );
        });

        return (
            <div >
                <h1>{title}</h1>
                <Table className='ts-historical-selected-node-table'>
                    <thead>
                    <tr>
                        {tableColumns}
                    </tr>
                    </thead>
                    <tbody>
                    {tableRows}
                    </tbody>
                </Table>
            </div>
        );
    };
}

export default TableDiff;