import React, { Component } from "react";
import { connect } from "react-redux";
import { Input } from "semantic-ui-react";

import { StyledAssignDropdown } from "./StyledAssignDropdown";

import { IMAGE_PORT, BLANK_AVATAR } from "@utilities";

class AssignDropdown extends Component {
  static defaultProps = {
    specialists: []
  };

  state = {
    options: [],
    showDropdown: false,
    showDeleteConfirmation: false
  };

  //Assign members dropdown

  openDropdown = e => {
    e.stopPropagation();
    this.setState(
      {
        options: this.props.allSpecialists,
        assignedIds: this.props.specialists.map(spec => spec.id),
        showDropdown: true
      },
      () => {
        document.addEventListener("click", this.closeDropdown);
      }
    );

    setTimeout(() => {
      this.searchInput && this.searchInput.focus();
    }, 10);
  };

  closeDropdown = e => {
    if (this.dropList && !this.dropList.contains(e.target)) {
      this.setState(
        {
          showDropdown: false,
          fetch: false
        },
        () => {
          document.removeEventListener("click", this.closeDropdown);
        }
      );
    }
  };

  handleCloseButton = e => {
    this.setState(
      {
        showDropdown: false,
        fetch: false
      },
      () => {
        document.removeEventListener("click", this.closeDropdown);
      }
    );
  };

  componentDidUpdate() {
    if (this.state.showDropdown) {
      //fix positioning of dropdown
      let dropdownRect = this.dropList.getBoundingClientRect();
      let triggerRect = this.trigger.getBoundingClientRect();

      if (dropdownRect.width + triggerRect.x > document.body.clientWidth) {
        this.dropList.style.left =
          -dropdownRect.width -
          triggerRect.x +
          document.body.clientWidth -
          15 +
          "px";
      }

      if (
        320 + triggerRect.y + triggerRect.height >
        document.body.clientHeight
      ) {
        this.dropList.style.top = "auto";
        this.dropList.style.bottom = "calc(100% + 4px)";
      }
    }
  }

  handleSearch = (e, data) => {
    if (data.value !== "") {
      let result = [];
      this.state.options.forEach(spec => {
        let name = spec.first_name + " " + spec.last_name;
        if (
          name.toLocaleLowerCase().indexOf(data.value.toLocaleLowerCase()) >= 0
        ) {
          result.push(spec);
        }
      });
      this.setState({
        options: result
      });
    } else
      this.setState({
        options: this.props.allSpecialists
      });
  };

  handleAssign = e => {
    const specId = e.target.getAttribute("data");
    let type;

    if (e.target.className === "assigned") {
      type = "remove";
    } else type = "assign";

    this.props.handleAssign(type, specId);

    this.props.closeOnChange && this.handleCloseButton(e);
  };

  render() {
    const {
      label,
      renderToDashboard,
      renderToModal,
      userTypes,
      bordered,
      userRole
    } = this.props;
    const { options, assignedIds, showDropdown } = this.state;
    const renderCondition = userTypes.some(type => type === userRole);

    return (
      renderCondition && (
        <StyledAssignDropdown renderToModal={renderToModal} bordered={bordered}>
          <a
            className="dropdownTrigger"
            onClick={this.openDropdown}
            ref={a => (this.trigger = a)}
          >
            <span className="plus" />
            {(renderToDashboard || renderToModal) && (
              <span className="label">{label}</span>
            )}
          </a>
          {showDropdown && (
            <div
              className="dropdown"
              ref={div => (this.dropList = div)}
              onClick={e => e.stopPropagation()}
            >
              <div className="close" onClick={this.handleCloseButton} />
              <p className="dropdownTitle">Members</p>
              <Input
                type="text"
                placeholder="Search members"
                name="searchSpec"
                ref={input => (this.searchInput = input)}
                onClick={e => e.target.focus()}
                onChange={this.handleSearch}
                autoComplete="off"
              />
              <div className="dropdown-list">
                {options &&
                  options.map((specialist, key) => (
                    <div
                      key={key}
                      data={specialist.id}
                      onClick={this.handleAssign}
                      className={
                        assignedIds.indexOf(specialist.id) >= 0
                          ? "assigned"
                          : ""
                      }
                    >
                      <img
                        data={specialist.id}
                        src={
                          specialist.avatar && specialist.avatar.url
                            ? IMAGE_PORT + specialist.avatar.url
                            : BLANK_AVATAR
                        }
                        alt="member"
                      />
                      {specialist.first_name + " " + specialist.last_name}
                    </div>
                  ))}
                {options.length === 0 && (
                  <div className="no-specs">No available specialists</div>
                )}
              </div>
            </div>
          )}
        </StyledAssignDropdown>
      )
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    userRole: state.user ? state.user.role : props.userRole
  };
};

export default connect(mapStateToProps)(AssignDropdown);
