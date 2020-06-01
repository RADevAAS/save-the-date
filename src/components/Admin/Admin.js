import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getUserId } from "../../reducers/user";
import { signOut } from "../../firebase";
import UserForm from "../UserForm/UserForm";
import AdminPage from "./AdminPage";
import { getEventPublicData } from "../../api/api";

class Admin extends React.Component {
  state = {
    eventExist: false,
  };

  logout = () => {
    signOut();
  };

  async componentDidMount() {
    const {
      match: {
        params: { eventId },
      },
    } = this.props;
    try {
      await getEventPublicData(eventId);

      this.setState({ eventExist: true });
    } catch (e) {
      console.log("No data", e);
    }
  }

  render() {
    const { userID } = this.props;
    const { eventExist } = this.state;
    if (!userID) {
      return <Redirect to="/login" />;
    } else if (eventExist) {
      return <AdminPage />;
    } else {
      return <UserForm />;
    }
  }
}

const mapStateToProps = (state) => ({
  userID: getUserId(state),
});

export default connect(mapStateToProps)(Admin);
