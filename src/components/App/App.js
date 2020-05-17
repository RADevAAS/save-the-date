import React from 'react';

import { getEventPublicData } from '../../api/api'

import data from '../../data/data';
import TemplateA from '../Templates/TemplateA';
import TemplateB from '../Templates/TemplateB';
import TemplateC from '../Templates/TemplateC';

const _Template = {
    a: TemplateA,
    b: TemplateB,
    c: TemplateC,
}

class App extends React.Component {

    async componentDidMount() {
        const {match: {params: {eventId}}} = this.props
        try {
            const eventData = await getEventPublicData(eventId)
            console.log('eventData', eventData)    
        } catch (e) {
            console.log('No data', e)    
        }

    }

    render() {        
        const { template } = data;
        const Template = _Template[template];

        return (
            <Template data={data}/>
        );

    }
}

export default App;
