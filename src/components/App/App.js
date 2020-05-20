import React from 'react';
import _ from 'lodash';

import { getEventPublicData } from '../../api/api'

import TemplateA from '../Templates/TemplateA';
import TemplateB from '../Templates/TemplateB';
import TemplateC from '../Templates/TemplateC';

import FormA from '../Forms/FormA';
import FormB from '../Forms/FormB';
import FormC from '../Forms/FormC';


const _Template = {
    a: TemplateA,
    b: TemplateB,
    c: TemplateC,
}

const _Form = {
    a: FormA,
    b: FormB,
    c: FormC,
}

class App extends React.Component {

    state = {
        data: {}
    }

    async componentDidMount() {
        const {match: {params: {eventId}}} = this.props
        try {
            const eventData = await getEventPublicData(eventId)

            this.setState({data: eventData.data})

            console.log('eventData', eventData)    
        } catch (e) {
            console.log('No data', e)    
        }

    }

    renderForm = () => {
        const { form } = this.state.data;

        const Form = _Form[form];
        return <Form data={this.state.data}/>
    }

    render() {        

        if (_.isEmpty(this.state.data)) {
            return  <div> j'ai pas de data</div>;
          }
            
            const { template } = this.state.data;
            const Template = _Template[template];
            
            return (
                <Template data={this.state.data} renderForm={this.renderForm}/>
            )};
        

    }


export default App;