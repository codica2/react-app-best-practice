import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import Loader from "@components/common/Loader";
import { Container } from "@styled/Containers";

import SearchFilterForm from "./forms/SearchFilterForm";
import FilteredList from "./FilteredList";

import { searchOperations } from "@ducks/search";

class Search extends Component {
  state = {
    filters: {
      hourly_rate: {
        min: 0,
        max: 100
      }
    },
    selectedProject: null
  };

  handleChange = (event, data) => {
    this.setState({
      filters: {
        ...this.state.filters,
        [data.name]: data.value
      }
    });
  };

  clearFilters = () => {
    this.setState({
      filters: {
        hourly_rate: {
          min: 0,
          max: 100
        }
      }
    });
  };

  handleChangeProject = value => {
    this.setState({ selectedProject: value });
  };

  render() {
    const {
      search: { result, loaded, loading }
    } = this.props;
    const { filters, selectedProject } = this.state;

    return (
      <Fragment>
        <Container fluid indentTopXs sidebarCondition>
          <SearchFilterForm
            handleChange={this.handleChange}
            handleChangeProject={this.handleChangeProject}
            clearFilters={this.clearFilters}
            filters={filters}
          />
        </Container>

        <Container sidebarCondition dashboardContainer transparent>
          {loaded && (
            <FilteredList
              filters={filters}
              specialists={result}
              projectId={selectedProject}
              handleMessage={this.handleMessage}
            />
          )}

          {loading && (
            <Loader loading transparent style={{ minHeight: "500px" }} />
          )}

          {loaded && result.length === 0 && (
            <div className="default">There are no results</div>
          )}
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    search: state.search
  };
};

export default connect(
  mapStateToProps,
  {
    ...searchOperations
  }
)(Search);
