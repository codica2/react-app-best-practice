import React, { Component } from "react";
import AssignDropdown from "@UI/AssignDropdown";
import MembersDropdown from "@UI/MembersDropdown";
import { S_REDGUY, S_ACTIVE, S_CORE } from "@utilities";
import { oneOfRoles } from "@views/utils/functions";
import { formatCurrency } from "@views/utils/validate";

class CustomCard extends Component {
  state = {
    showDropdown: false
  };

  static defaultProps = {
    specialists: []
  };

  assignSpeciaist = (type, specId) => {
    const { assignSpecialist, removeSpecialist, id } = this.props;

    if (type === "assign") {
      assignSpecialist(id, specId);
    } else removeSpecialist(id, specId);
  };

  showEditTaskModal = () => {
    const { id, handleEditTask } = this.props;
    handleEditTask(id);
    let open = document.querySelector("#editTask");
    open.click();
  };

  render() {
    const {
      name,
      id,
      specialists,
      specialistList,
      specialist_tasks = [],
      eta,
      cost,
      deleteTask,
      epic_id,
      laneId,
      user,
      specialistsDict
    } = this.props;

    const specialistCosts =
      specialist_tasks &&
      specialist_tasks.find(({ specialist }) => user.id === specialist.id);

    return (
      <div
        className="dragItem"
        style={{ backgroundColor: "#fff" }}
        onMouseLeave={() => this.setState({ showDropdown: false })}
      >
        <h4 className="title">{name}</h4>
        {eta && (
          <div className="line">
            <i className="fas fa-calendar-alt" />
            <span>
              {eta
                .split("-")
                .reverse()
                .join("/")}
            </span>
          </div>
        )}
        {user.role === S_REDGUY && !!cost && (
          <div className="line">
            <i className="fas fa-dollar-sign" />
            <span>{formatCurrency(cost)}</span>
          </div>
        )}

        {oneOfRoles(user.role, S_ACTIVE, S_CORE) && !!specialistCosts && (
          <div className="line">
            <i className="fas fa-dollar-sign" />
            <span>{formatCurrency(specialistCosts.cost)}</span>
          </div>
        )}

        <div className="persons">
          <MembersDropdown
            members={specialists}
            specialists={specialistsDict}
            countToShow={3}
            position="bottom left"
            handleRemove={this.assignSpeciaist}
            userRole={user.role}
            userId={user.id}
            removeText="epic"
          />
          <AssignDropdown
            specialists={specialists}
            allSpecialists={specialistList}
            handleAssign={this.assignSpeciaist}
            userTypes={[S_REDGUY]}
            userRole={user.role}
            closeOnChange={true}
            bordered
          />
        </div>
        {user.role === S_REDGUY ? (
          <div className="dropdown">
            <a
              tabIndex="1"
              className="trigger"
              onClick={e => {
                e.stopPropagation();
                this.setState({ showDropdown: !this.state.showDropdown });
              }}
            >
              ...
            </a>
            {this.state.showDropdown ? (
              <div className="menu" onClick={e => e.stopPropagation()}>
                <div className="item">
                  <div onClick={this.showEditTaskModal}>Edit</div>
                </div>
                <div className="item">
                  <div onClick={() => deleteTask(epic_id, id, laneId)}>
                    Delete
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    );
  }
}

export default CustomCard;
