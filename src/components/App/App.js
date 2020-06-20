import React from "react";
import _ from "lodash";
import RingsLoader from "../Loader/RingsLoader";
import PropTypes from "prop-types";

import { getEventPublicData } from "../../api/api";

import TemplateA from "../Templates/TemplateA";
import TemplateB from "../Templates/TemplateB";
import TemplateC from "../Templates/TemplateC";

import FormA from "../Forms/FormA";
import FormB from "../Forms/FormB";
import FormC from "../Forms/FormC";

const _Template = {
  A: TemplateA,
  B: TemplateB,
  C: TemplateC,
};

const _Form = {
  A: FormA,
  B: FormB,
  C: FormC,
};

// TODO rename EventScreen
// TODO create mock
class App extends React.Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const {
      match: {
        params: { eventId },
      },
    } = this.props;
    try {
      const eventData = await getEventPublicData(eventId);

      this.setState({ data: eventData.data });

      console.log("eventData", eventData);
    } catch (e) {
      console.log("No data", e);
    }
  }

  renderForm = () => {
    const { form } = this.state.data.config;

    const Form = _Form[form];
    return <Form data={this.state.data.details} />;
  };

  render() {
    if (_.isEmpty(this.state.data)) {
      return <RingsLoader/>;
    }

    const { template } = this.state.data.config;
    const Template = _Template[template];

    return (
      <Template data={this.state.data.details} renderForm={this.renderForm} />
    );
  }
}

App.propTypes = {
  _Template: PropTypes.string.isRequired, // TODO remove - not props
  _Form: PropTypes.string.isRequired, // TODO remove - not props
};

export default App;
