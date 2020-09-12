import React from "react";
import _ from "lodash";
import RingsLoader from "../Loader/RingsLoader";

import { getEventPublicData } from "../../api/api";
import { mockEventData } from "../../assets/mock/mockEventData";

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

// DONE rename EventScreen
// TODO create mock
class EventScreen extends React.Component {
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

      const data = {
        ...mockEventData,
        ...eventData.data
      }

      this.setState({ data });

      console.log("eventData", eventData);
    } catch (e) {
      console.log("No data", e);
      this.setState({ data: mockEventData });
    }
  }

  renderForm = () => {
    const { form } = this.state.data.config;

    const Form = _Form[form];
    return <Form data={this.state.data.details} />;
  };

  render() {
    const { data } = this.state;

    if (_.isEmpty(data)) {
      return <RingsLoader />;
    }

    const { template } = data.config;
    const Template = _Template[template];

    return <Template data={data.details} renderForm={this.renderForm} />;
  }
}

export default EventScreen;
