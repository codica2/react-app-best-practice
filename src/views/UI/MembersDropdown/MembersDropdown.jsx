import React, { Component } from "react";
import PropTypes from "prop-types";

import PersonTile from "@UI/PersonTile";
import StyledDropdown from "./StyledDropdown";

class MembersDropdown extends Component {
  state = {
    showDropdown: false
  };

  static defaultProps = {
    members: [],
    specialists: {}
  };

  static propTypes = {
    members: PropTypes.array,
    countToShow: PropTypes.number
  };

  handleAssign = (type, id) => {
    const { handleRemove } = this.props;
    handleRemove(type, id);
  };

  openDropdown = e => {
    e.stopPropagation();

    this.setState(
      {
        showDropdown: true
      },
      () => {
        document.addEventListener("click", this.closeDropdown);
      }
    );
  };

  closeDropdown = e => {
    if (this.dropList && !this.dropList.contains(e.target)) {
      this.setState(
        {
          showDropdown: false
        },
        () => {
          document.removeEventListener("click", this.closeDropdown);
        }
      );
    }
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
          2 +
          "px";
      }

      if (
        dropdownRect.height + triggerRect.y + triggerRect.height >
        document.body.clientHeight
      ) {
        this.dropList.style.top = "auto";
        this.dropList.style.bottom = "calc(100% + 4px)";
      }
    }
  }

  render() {
    const {
      members,
      countToShow,
      hideDelete,
      removeText,
      userRole,
      userId
    } = this.props;
    const { showDropdown } = this.state;
    const rest = members.length - countToShow;

    return (
      <StyledDropdown>
        {members.slice(0, countToShow).map(specialist => {
          return (
            <PersonTile
              key={specialist.id}
              specialist={specialist}
              handleRemove={this.handleAssign}
              removeTitle={removeText}
              hideDelete={hideDelete}
              userRole={userRole}
              userId={userId}
              compressed
            />
          );
        })}
        {rest > 0 && (
          <div className="dropdownWrapper">
            <a
              onClick={this.openDropdown}
              className="allMembers"
              ref={a => (this.trigger = a)}
            >
              {rest}
            </a>
            {showDropdown && (
              <div
                className="membersDropdown"
                ref={div => (this.dropList = div)}
                onClick={e => e.stopPropagation()}
              >
                <h3>Members</h3>
                {members.map(specialist => {
                  return (
                    <PersonTile
                      key={specialist.id}
                      specialist={specialist}
                      handleRemove={this.handleAssign}
                      userRole={userRole}
                      userId={userId}
                      removeTitle={removeText}
                      hideDelete={hideDelete}
                    />
                  );
                })}
              </div>
            )}
          </div>
        )}
      </StyledDropdown>
    );
  }
}

export default MembersDropdown;
