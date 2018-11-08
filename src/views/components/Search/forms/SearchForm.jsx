import React, { Component, Fragment } from "react";
import { Form, Input, Grid } from "semantic-ui-react";

import { DvBlueButton } from "@styled/DVButton";

export default class SearchForm extends Component {
  state = {
    search: "",
    loading: false
  };

  handleSearch = (e, { name, value }) => {
    this.setState({
      search: value
    });
  };

  handleClear = () => {
    this.setState({ search: "" }, () => {
      this.handleSubmitSearch();
    });
  };

  handleSubmitSearch = () => {
    const {
      currentProject,
      searchSpecialist,
      searchSpecialistForProject
    } = this.props;

    const { search } = this.state;

    if (!!search || !currentProject) {
      searchSpecialist(search);
    } else if (currentProject) {
      searchSpecialistForProject(currentProject);
    }
  };

  clearForm = () => {
    const { clear } = this.props;
    clear();
    this.handleClear();
  };

  render() {
    const { search, loading } = this.state;

    return (
      <Fragment>
        <Grid.Column computer={14}>
          <Form onSubmit={this.handleSubmitSearch}>
            <Input
              className="search"
              placeholder="Search by keywords"
              loading={loading}
              icon="search"
              iconPosition="left"
              action="Search"
              onChange={this.handleSearch}
              onKeyUp={e => e.keyCode === 13 && e.target.blur()}
              value={search}
              fluid
            />
          </Form>
        </Grid.Column>
        <Grid.Column computer={2}>
          <DvBlueButton
            onClick={this.clearForm}
            role="button"
            className="clear dv-blue inverted"
            uppercase="true"
            fontSize={14}
            fluid
          >
            Clear filter
          </DvBlueButton>
        </Grid.Column>
      </Fragment>
    );
  }
}
